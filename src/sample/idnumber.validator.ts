import { AbstractControl } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';

export function IDNumberValidator(control: AbstractControl) {
  const currentValue = control.value;

  if (isNaN(currentValue)) {
    return { validIDNumber: true };
  }

  try {
    const StringCurrentValue = currentValue.toString();
    if (StringCurrentValue.replace(' ', '').length < 13) {
      return { validIDNumber: true };
    }

    const dateMonth: string = StringCurrentValue.substring(2, 4);
    const dateDay: string = StringCurrentValue.substring(4, 6);
    const saCitizenNumber: string = StringCurrentValue.substring(10, 11);
    if (parseInt(saCitizenNumber, 10) > 1 || parseInt(dateDay, 10) > 31 || parseInt(dateMonth, 10) > 12) {
      return { validIDNumber: true };
    }

    // get the gender
    const genderCode = StringCurrentValue.substring(6, 10);
    const gender = parseInt(genderCode, 10) < 5000 ? 'Female' : 'Male';

    // get country ID for citzenship
    const citzenship = parseInt(StringCurrentValue.substring(10, 11), 10) === 0 ? 'Yes' : 'No';

    // apply Luhn formula for check-digits
    let tempTotal = 0;
    let checkSum = 0;
    let multiplier = 1;
    for (let i = 0; i < 13; ++i) {
      tempTotal = parseInt(StringCurrentValue.charAt(i), 10) * multiplier;
      if (tempTotal > 9) {
        tempTotal = parseInt(tempTotal.toString().charAt(0), 10) + parseInt(tempTotal.toString().charAt(1), 10);
      }
      checkSum = checkSum + tempTotal;
      multiplier = (multiplier % 2 === 0) ? 1 : 2;
    }
    if ((checkSum % 10) !== 0) {
      return { validIDNumber: true };
    }
  } catch {

  }

  return null;

}
