export class Validation {
  validation_messages = {
    emailAddress: [
      { type: 'required', message: 'Email address required' },
      { type: 'email', message: 'Please check email format' },
    ],
    password: [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Your password cannot be less than 8 characters long.' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Password required' },
      { type: 'NotEqual', message: 'Password and confirm password must match' }
    ],
    // ****************** RegisterAccount form
    firstName: [
      { type: 'required', message: 'First name is required' },
    ],
    name: [
      { type: 'required', message: 'First name is required' },
    ],
    lastName: [
      { type: 'required', message: 'Last name is required' },
    ],
    preferredName: [
      { type: 'required', message: 'Preferred name is required' },
    ],
    surname: [
      { type: 'required', message: 'Last name is required' },
    ],
    maidenName: [
      { type: 'required', message: 'Maiden name is required' },
    ],
    idNumber: [
      { type: 'required', message: 'ID number is required' },
      { type: 'validIDNumber', message: 'ID number is invalid, please format correctly' }
    ],
    cellNumber: [
      { type: 'required', message: 'Cell number is required' },
      { type: 'pattern', message: 'Please enter a valid contact number' },
    ],
    dateOfBirth: [
      { type: 'required', message: 'Date of birth is required' },
    ],
    portfolioReviewMonth: [
      { type: 'required', message: 'Portfolio Review Month is required' },
    ],
    fspNumber: [
      { type: 'required', message: 'FSP number is required' },
    ],
    brokerType: [
      { type: 'required', message: 'Broker type is required' },
    ],
    brokerage: [
      { type: 'required', message: 'Brokerage type is required' },
      { type: 'pattern', message: 'Please enter letters only' },
    ],
    contractedTo: [
      { type: 'required', message: 'Broker type is required' },
    ],
    // ****************** TeamMemberAccount form
    displayName: [
      { type: 'required', message: 'Display name is required' },
    ],
    accountType: [
      { type: 'required', message: 'Account type is required' },
    ],
    // ****************** Client
    initials: [
      { type: 'required', message: 'Initials are required' },
    ],
    title: [
      { type: 'required', message: 'Title is required' },
    ],
    occupation: [
      { type: 'required', message: 'Occupation is required' },
    ],
    employer: [
      { type: 'required', message: 'Employer is required' },
    ],
    hasEmployeeBenefits: [
      { type: 'required', message: 'Employer benefits required' },
    ],
    taxNumber: [
      { type: 'required', message: 'Tax number is required' },
    ],
    annualIncome: [
      { type: 'required', message: 'Annual income is required' },
    ],
    monthlyIncomeBeforeTax: [
      { type: 'required', message: 'monthly Income Before Tax is required' },
    ],
    estimatedTaxRate: [
      { type: 'required', message: 'Estimated tax rate is required' },
    ],
    monthlyIncomeAfterTax: [
      { type: 'required', message: 'Monthly income tax rate is required' },
    ],
    incomeRequiredAtRetirement: [
      { type: 'required', message: 'Income required at retirement is required' },
    ],
    preferredRetirementAge: [
      { type: 'required', message: 'Preferred retirement age is required' },
    ],
    qualificationName: [
      { type: 'required', message: 'Qualification name is required' },
    ],
    institute: [
      { type: 'required', message: 'Institute is required' },
    ],
    premiumInterval: [
      { type: 'required', message: 'Premium Interval is required' },
    ],
    yearOfQualification: [
      { type: 'required', message: 'Year of qualification is required' },
    ],
    qualificationLevel: [
      { type: 'required', message: 'Qualification level is required' },
    ],
    relation: [
      { type: 'required', message: 'Relation is required' },
    ],
    gender: [
      { type: 'required', message: 'Gender is required' },
    ],
    dependantIdNumber: [
      { type: 'required', message: 'Dependant Id number is required' },
      { type: 'validIDNumber', message: 'Dependant Id number is invalid, please format correctly' }
    ],
    institution: [
      { type: 'required', message: 'Institution is required' },
    ],
    yearOfCompletion: [
      { type: 'required', message: 'Year of completion is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    // ******************* Moveable Asset
    type: [
      { type: 'required', message: 'Type is required' },
    ],
    location: [
      { type: 'required', message: 'Location is required' },
      { type: 'pattern', message: 'Please enter letters only' },
    ],
    ownership: [
      { type: 'required', message: 'Ownership is required' },
    ],
    purchaseDate: [
      { type: 'required', message: 'Purchased date is required' },
    ],
    debtBalance: [
      { type: 'required', message: 'Debt balance is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    purchasePrice: [
      { type: 'required', message: 'Purchase price is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    moveableAssetPurchasePrice: [
      { type: 'required', message: 'Purchase price is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    fixedAssetPurchasePrice: [
      { type: 'required', message: 'Purchase price is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    monthlyRepayment: [
      { type: 'required', message: 'Monthly repayment is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    assetValue: [
      { type: 'required', message: 'Asset value is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    isTheAssetInsured: [
      { type: 'required', message: 'Asset insured is required' },
    ],
    
    insurancePremium: [
      { type: 'required', message: 'Insurance premium is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    insuredAmount: [
      { type: 'required', message: 'Insured amount is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    insuranceInstitute: [
      { type: 'required', message: 'Insurance instituteis required' },
    ],
    insuranceInceptionDate: [
      { type: 'required', message: 'Insurance inception date is required' },
    ],
    valuationDate: [
      { type: 'required', message: 'Valuation date is required' },
    ],
    // ******************* Loans Debt Details
    debtLoanType: [
      { type: 'required', message: 'Type of debt is required' },
    ],
    debtLoanPrincipalAmount: [
      { type: 'required', message: 'Principal amount is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    debtLoanBalance: [
      { type: 'required', message: 'Debt balance is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    debtLoanMonthlyRepayment: [
      { type: 'required', message: 'Monthly repayment is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    // ******************* Assurance Portfolio - Life
    lifeAssurancePolicyNumber: [
      { type: 'required', message: 'Policy Number is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceInstitute: [
      { type: 'required', message: 'Institute is required' },
    ],
    lifeAssurancePremium: [
      { type: 'required', message: 'Premium is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceTotalCovered: [
      { type: 'required', message: 'Total covered is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceDisabilityCapital: [
      { type: 'required', message: 'Disability capital is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceDisabilityIncomeTemporary: [
      { type: 'required', message: 'Disability income temporary is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceDisabilityIncomePermanent: [
      { type: 'required', message: 'Disability income permanent is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    lifeAssuranceDreadDiseaseCapital: [
      { type: 'required', message: 'Dread disease capital is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    percentage: [
      { type: 'required', message: 'Percentage is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    // ******* Medical Scheme
    medicalSchemeName: [
      { type: 'required', message: 'Medical scheme name is required' },
    ],
    medicalSchemePlanType: [
      { type: 'required', message: 'Plan type is required' },
    ],
    medicalSchemePolicyNumber: [
      { type: 'required', message: 'Policy number is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    medicalSchemeCoverType: [
      { type: 'required', message: 'Cover type is required' },
    ],
    // ************* Emergency info - Medical Practitioner
    doctorsName: [
      { type: 'required', message: 'Doctor name is required' },
    ],
    typeOfDoctor: [
      { type: 'required', message: 'Type of doctor is required' },
    ],
    doctorsContactNumber: [
      { type: 'required', message: 'Doctors contact number is required' },
      { type: 'pattern', message: 'Please enter a valid contact number' },
    ],

    // ********** Emergency Contact details
    emergencyContactName: [
      { type: 'required', message: 'Name is required' },
    ],
    emergencyContactSurname: [
      { type: 'required', message: 'Surname is required' },
    ],
    emergencyContactIdNumber: [
      { type: 'required', message: 'Id number is required' },
      { type: 'validIDNumber', message: 'Emergency contact Id number is invalid, please format correctly' }
    ],
    emergencyContactContactNumber: [
      { type: 'required', message: 'Contact number is required' },
      { type: 'pattern', message: 'Please enter a valid contact number' },
    ],
    emergencyContactEmailAddress: [
      { type: 'required', message: 'Email address is required' },
      { type: 'email', message: 'Please enter correct email address' },
    ],
    emergencyContactRelation: [
      { type: 'required', message: 'Contact relation is required' },
    ],
    // ************* Investment Details
    investmentPolicyNumber: [
      { type: 'required', message: 'Policy number is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    investmentInstitute: [
      { type: 'required', message: 'Institute is required' },
    ],
    investmentPremium: [
      { type: 'required', message: 'Premium is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    investmentCashValue: [
      { type: 'required', message: 'Cash value is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    // ************* Retirement Details
    retirementPolicyNumber: [
      { type: 'required', message: 'Policy number is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    retirementInstitute: [
      { type: 'required', message: 'Institute is required' },
    ],
    retirementPremium: [
      { type: 'required', message: 'Premium is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    retirementCashValue: [
      { type: 'required', message: 'Cash value is required' },
      { type: 'pattern', message: 'please enter whole numbers only' },
    ],
    // ************** Additional Information
    isASmoker: [
      { type: 'required', message: 'This field is required' },
    ],
    hasAWill: [
      { type: 'required', message: 'Please select whether a client has will or not.' },
    ],
    maritalStatus: [
      { type: 'required', message: 'Client marital status is required.' },
    ],
    wasReferred: [
      { type: 'required', message: 'Please select whether a client was referred or not.' },
    ],
    clientCategory: [
      { type: 'required', message: 'Client category is required.' },
    ],
    hasDependants: [
      { type: 'required', message: 'Please select whether a client has dependants or not.' },
    ],
    // ******* Will details
    willInstitute: [
      { type: 'required', message: 'Institute is required.' },
    ],
    // ******* Marriage
    marriageDate: [
      { type:'required', message: 'Marriage date is required.' },
    ],
    marriageType: [
      { type: 'required', message: 'Marriage type is required.' },
    ],
    // ******* Referral Details
    referrerName: [
      { type: 'required', message: 'Referrer name is required.' },
    ],
    referrerSurname: [
      { type: 'required', message: 'Referrer surname is required.' },
    ],
    // ****************** TeamActivities form
    activityType: [
      { type: 'required', message: 'Activity type is required.' },
    ],
    dueDate: [
      { type: 'required', message: 'Due date is required.' },
    ],
    activityStatus: [
      { type: 'required', message: 'Activity status is required.' },
    ],
    assignedto: [
      { type: 'required', message: 'Assigned to is required.' },
    ],
    associatedClient: [
      { type: 'required', message: 'Associated client is required.' },
    ],
    Description: [
      { type: 'required', message: 'Description is required.' },
    ],
    feedback:[
      { type: 'required', message: 'Feedback is required.' },
    ],
    // ****************** TeamActivities form
    CampaignType: [
      { type: 'required', message: 'Campaign type is required.' },
    ],
    CampaignStatus: [
      { type: 'required', message: 'Campaign status is required.' },
    ],
    CampaignName: [
      { type: 'required', message: 'Campaign name is required.' },
    ],
    CampaignMessage: [
      { type: 'required', message: 'Campaign message is required.' },
    ],
    ChannelType: [
      { type: 'required', message: 'Campaign type is required.' },
    ],
    ActionType: [
      { type: 'required', message: 'Action type is required.' },
    ],
    ActionDueDate: [
      { type: 'required', message: 'Action Due Date is required.' },
    ],
    AssignedTo: [
      { type: 'required', message: 'Assigned to is required.' },
    ],

    // *************** Add opportunity ***** //
    EmailAddress: [
      { type: 'required', message: 'Email address is required.' },
    ],
    CellNumber: [
      { type: 'required', message: 'Cell number is required.' },
      { type: 'pattern', message: 'Please enter a valid contact number' },
    ],
    Source: [
      { type: 'required', message: 'Source is required.' },
    ],
    CampaignSource: [
      { type: 'required', message: 'Campaign source is required.' },
    ],
    OpportunityDescription: [
      { type: 'required', message: 'Description is required.' },
    ],
    BusinessType: [
      { type: 'required', message: 'Business type is required.' },
    ],
    Institution: [
      { type: 'required', message: 'Institution is required.' },
    ],
    ExpectedCommission: [
      { type: 'required', message: 'Expected commission is required.' },
    ],
    ExpectedCredits: [
      { type: 'required', message: 'Expected credits is required.' },
    ],
    SalesStep: [
      { type: 'required', message: 'Sales step is required.' },
    ],
    ExpectedClosedDate: [
      { type: 'required', message: 'Expected closed date is required.' },
    ],
    associatedClientID: [
      { type: 'required', message: 'Associated client is required.' },
    ],
    opportunitySourceType: [
      { type: 'required', message: 'Source type is required.' },
    ],
    businessType: [
      { type: 'required', message: 'Business type is required.' },
    ],
    filtername: [
      { type: 'required', message: 'File name is required.' },
    ],
    expectedCommissionValue: [
      { type: 'required', message: 'Expected commission credits is required.' },
      { type: 'pattern', message: 'Please enter whole numbers only' }
    ],
    expectedCommissionCredits: [
      { type: 'required', message: 'Expected commission value is required.' },
      { type: 'pattern', message: 'Please enter whole numbers only' }
    ],
    expectedDealCloseDate: [
      { type: 'required', message: 'Expected closed date is required.' },
    ],
    opportunityDescription: [
      { type: 'required', message: 'Description is required.' },
    ],
    opportunityReferralID: [
      { type: 'required', message: 'Referral is required.' },
    ],
    opportunitySourceID: [
      { type: 'required', message: 'Campaign source is required.' },
    ],

    // Percentage
    janPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    febPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    marchPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    aprilPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    mayPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    junePercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    julyPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    augPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    septPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    octPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    novPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],
    decPercentage: [
      { type: 'required', message: 'Percentage is required.' },
      { type: 'pattern', message: 'Invalid percentage.' },
    ],

    // Target Year
    targetYear: [
      { type: 'required', message: 'Target Year is required.' },
      { type: 'pattern', message: 'Invalid target year.' },
    ],

    // Target Year
    brokerDisclosure: [
      { type: 'required', message: 'A Broker Disclosure Note is required.' }
    ],

    // Client Type
    clientType: [
      { type: 'required', message: 'Client type is required'}
    ],

  };
}
