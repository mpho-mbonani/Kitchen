import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDNumberValidator } from '../../../services/validation/idnumber.validator';
import { DataService } from '../../../services/data/data.service';
import { Validation } from '../../../services/validation/validation';
import { AccountRegistrationService } from '../accountregistration.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AzureService } from 'src/app/services/azure/azure.service';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { LookupService } from '../../../services/data/lookup.service';

@Component({
  selector: 'app-registerbroker',
  templateUrl: './registerbroker.component.html',
  styleUrls: ['./registerbroker.component.scss'],
})
export class RegisterBrokerComponent implements OnInit {

  registrationForm: FormGroup;
  validation = new Validation();
  brokerTypeList = [{ value: 'Independent', label: 'Independent' }, { value: 'Tied', label: 'Tied' }];
  brokerChosenType = 'tied';
  brokerNote: File;
  brokerLogo: File;
  showChat = false;
  validationMessage;
  fileUploaded = false;
  invalidFile = false;
  brokerNotUploaded = false;
  acceptTerms = false;
  isRegistered;
  registerStepID;
  contractList;

  @Output() accountStepstateChanged: EventEmitter<number> = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('accountStep') setBreadCrumb: number;

  constructor(
    private dataService: DataService,
    private toastService: ToastService,
    private localStorage: LocalstorageService,
    private loaderSpinner: SpinnerService,
    private azureService: AzureService,
    private lookUpService: LookupService,
    private accountRegistrationService: AccountRegistrationService
  ) { }

  ngOnInit() {
    this.contractList = this.lookUpService.institutionList;
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      idNumber: new FormControl(null, [Validators.required, IDNumberValidator]),
      fspNumber: new FormControl(null, [Validators.required]),
      brokerType: new FormControl(null, [Validators.required]),
      brokerage: new FormControl(null, Validators.pattern('[a-zA-Z ]*')),
      contractedTo: new FormControl(null, [Validators.required]),
      codes: new FormArray([]),
      acceptTerms: new FormControl(null, [Validators.required])
    });
    this.isRegistered = this.dataService.isRegistered;
    this.registrationForm.statusChanges.subscribe(() => {
      this.acceptTerms = (this.registrationForm.controls.acceptTerms.value && this.registrationForm.valid) ? true : false;
    });
    this.accountRegistrationService.accountStep.subscribe((step: number) => {
      this.accountStepstateChanged.emit(step);
    });

    // because register page is served up everytime while app tries figuring out whether you're registered
    if (this.dataService.accountValues.registrationCompletion !== '0%' &&
      this.dataService.accountValues.registrationCompletion !== '100%') {
      // this.toastService.presentToast(`Registration Progress ${this.dataService.accountValues.registrationCompletion}`, 3000);
    }
  }

  private buildItemCode(label: string) {
    return new FormGroup({
      name: new FormControl(label),
      code: new FormControl(''),
    });
  }

  ChangeBrokerType(event) {
    this.brokerChosenType = event.detail.value;
    this.registrationForm.controls.contractedTo.setValue(null);
  }

  get codesArray() {
    return this.registrationForm.get('codes') as FormArray;
  }

  ChangeContractedTo(event) {
    const currentcodesArrayLength = this.codesArray.length;
    if (currentcodesArrayLength > 0) {
      for (let a = 0; a <= currentcodesArrayLength - 1; a++) {
        this.codesArray.removeAt(0);
      }
    }
    const item: any[] = event.detail.value;
    if (item[0].length === 1) {
      this.codesArray.push(this.buildItemCode(item.toString())); // for single contracted to item
    } else {
      for (let x = 0; x <= item.length - 1; x++) {
        this.codesArray.push(this.buildItemCode(item[x]));
      }
    }
  }

  setBrokerLogoFile(file) {
    this.brokerLogo = file;
  }

  changeListener($event) {
    this.brokerNote = $event.target.files[0];
  }

  uploadBrokerDisclosure(event) {

    if (event.target.files.length > 0) {
      if (event.target.files[0].type !== 'application/pdf') {
        this.invalidFile = true;
        this.fileUploaded = false;
        this.validationMessage = 'You may only upload PDF files.';
        return;
      }

      this.brokerNote = event.target.files[0];
      this.invalidFile = false;
      this.fileUploaded = true;
    }

  }

  async submit() {
    if (!this.fileUploaded) {
      this.validationMessage = 'Please upload a Broker Disclosure to proceed.';
      this.toastService.presentToast('Please upload a Broker Disclosure to proceed.', 5000);
      return;
    }

    this.loaderSpinner.show().then(async () => {
      this.dataService.showChatWidget.subscribe((result: boolean) => {
        this.showChat = result;
      });

      const authToken = this.localStorage.getFromLocal('token');
      this.dataService.accountValues = this.registrationForm.value;
      this.dataService.accountValues.latestBrokerDisclosureFilename = 'brokerdisclosure.pdf';
      this.accountRegistrationService.createBroker();
      this.accountRegistrationService.register('Saving', 'Broker Profile', 1).then(async (resolve) => {
        if (resolve) {
          await this.accountRegistrationService.createBrokerVaultRepository().then(async () => {

            this.azureService.storeVaultContent('Profile Pictures', 'brokercompanylogo.jpg', this.brokerLogo).then(async res => {
              this.toastService.presentToast('Broker Logo Uploaded Successfully.', 5000);
              this.azureService.storeVaultContent('Broker Disclosure', 'brokerdisclosure.pdf', this.brokerNote).then(response => {
                this.toastService.presentToast('Broker Disclosure Uploaded Successfully.', 5000);
                this.loaderSpinner.hide();
                // tslint:disable-next-line:max-line-length
                this.azureService.createBrokerInitiatedClientActivityEvent('Broker Disclosure Upload', this.dataService.accountValues.id, 'brokerdisclosure.pdf', 'has been uploaded for clients to acknowledge');
              })
                .catch(error => {
                  this.loaderSpinner.hide();
                  this.toastService.presentToast('Broker Discloser Upload Failed - Please try again.', 10000);
                });
            }).catch(error => {
              this.loaderSpinner.hide();
              this.toastService.presentToast('Broker Logo Upload Failed - Please try again.', 10000);
            });
          });
        }
      });
    });
  }
}
