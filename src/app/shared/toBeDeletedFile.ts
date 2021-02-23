export const SampleTemplate = [
  {
    columnName: 'projectCode',
    displayName: 'Project Code',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'projectName',
    displayName: 'Project Name',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'item',
    displayName: 'Item',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'activity',
    displayName: 'Activity',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'respDomainCode',
    displayName: 'Resp. Domain Code',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'respDomainName',
    displayName: 'Resp. Domain Name',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'mon',
    displayName: 'Mon',
    isSticky: false,
    type: 'input',
    propertyData: '07-12',
    mobile: true,
    timesheetStatus: 'submitted'
  },
  {
    columnName: 'tue',
    displayName: 'Tue',
    isSticky: false,
    type: 'input',
    propertyData: '08-12',
    mobile: true,
    timesheetStatus: 'saved'
  },
  {
    columnName: 'wed',
    displayName: 'Wed',
    isSticky: false,
    type: 'input',
    propertyData: '09-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'thu',
    displayName: 'Thu',
    isSticky: false,
    type: 'input',
    propertyData: '10-12',
    mobile: true,
    timesheetStatus: 'saved'
  },
  {
    columnName: 'fri',
    displayName: 'Fri',
    isSticky: false,
    type: 'input',
    propertyData: '11-12',
    mobile: true,
    timesheetStatus: 'submitted'
  },
  {
    columnName: 'sat',
    displayName: 'Sat',
    isSticky: true,
    type: 'input',
    propertyData: '12-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'sun',
    displayName: 'Sun',
    isSticky: true,
    type: 'input',
    propertyData: '13-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'total',
    displayName: 'Total',
    isSticky: true,
    type: 'input',
    propertyData: '',
    mobile: false
  }
];

// export const SampleColumnsToBeDisplayed = ['id', 'name', 'progress', 'color', 'actions'];
export const SampleColumnsToBeDisplayed = ['projectCode', 'projectName', 'item', 'activity', 'respDomainCode',
  'respDomainName', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'total'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export const datasource =
  [{
    projectCode: 'OVH0001',
    projectName: 'Project grouping all overhead related activities',
    item: 'OVH0001',
    activity: 'Meeting and Events',
    respDomainCode: 'RAPID',
    respDomainName: 'RAPID'
  }];

export const timesheetsMock = [
  {
    "set": [
      {
        label: 'Login',
        value: 'id851321'
      },
      {
        label: 'Name',
        value: 'LAZARUS Kranthi Kumar'
      },
      {
        label: 'Week',
        value: '48-2018'
      }
    ]
  },
  {
    "set": [
      {
        label: 'Section',
        value: 'DTI-ITS-ETS-COS-HR'
      },
      {
        label: 'Org.Unit',
        value: 'HUMAN RESOURCES & CORPORATE APPLICATIONS'
      },
      {
        label: 'Actuals',
        value: '26.11.2018 to 30.11.2018'
      }
    ]
  },
  {
    "set": [
      {
        label: 'Approver',
        value: 'HONGENAERT Francis'
      },
      {
        label: 'Approver +2',
        value: 'AMAND François'
      },
      {
        label: 'Goto Reference Date',
        value: 'datepicker'
      }
    ]
  }
];


// Approver Screen

export const ApproverTemplate = [
  {
    columnName: 'userInformation',
    displayName: 'User Information',
    isSticky: false,
    type: 'label',
    propertyData: '',
    mobile: false,
    timesheetStatus: ''
  },
  {
    columnName: 'mon',
    displayName: 'Mon',
    isSticky: false,
    type: 'label',
    propertyData: '07-12',
    mobile: true,
    timesheetStatus: 'submitted'
  },
  {
    columnName: 'tue',
    displayName: 'Tue',
    isSticky: false,
    type: 'label',
    propertyData: '08-12',
    mobile: true,
    timesheetStatus: 'saved'
  },
  {
    columnName: 'wed',
    displayName: 'Wed',
    isSticky: false,
    type: 'label',
    propertyData: '09-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'thu',
    displayName: 'Thu',
    isSticky: false,
    type: 'label',
    propertyData: '10-12',
    mobile: true,
    timesheetStatus: 'saved'
  },
  {
    columnName: 'fri',
    displayName: 'Fri',
    isSticky: false,
    type: 'label',
    propertyData: '11-12',
    mobile: true,
    timesheetStatus: 'submitted'
  },
  {
    columnName: 'sat',
    displayName: 'Sat',
    isSticky: true,
    type: 'label',
    propertyData: '12-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'sun',
    displayName: 'Sun',
    isSticky: true,
    type: 'label',
    propertyData: '13-12',
    mobile: true,
    timesheetStatus: 'notFilled'
  },
  {
    columnName: 'total',
    displayName: 'Total',
    isSticky: true,
    type: 'label',
    propertyData: '',
    mobile: false
  }
];

export const ApproverColumnsToBeDisplayed = ['userInformation', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'total', 'select', 'details'];

export const ApproverDatasource = [
  {
    userInformation: 'id851321 - Kranthi Kumar LAZARUS',
    mon: '4:00',
    tue: '2:00',
    wed: '8:00',
    thu: '1:00',
    fri: '5:00',
    sat: '0:00',
    sun: '0:00',
    total: '20:00'
  },
  {
    userInformation: 'id840266 - Abhijit Roy CHOUDARY',
    mon: '4:00',
    tue: '2:00',
    wed: '8:00',
    thu: '1:00',
    fri: '5:00',
    sat: '0:00',
    sun: '0:00',
    total: '20:00'
  }
];

//Report Screen

export const ReportTemplate = [
  {
    columnName: 'perNumber',
    displayName: 'Per Number',
    isSticky: true,
    type: 'select',
    propertyData: ['id851321 - Kranthi Kumar LAZARUS', 'id840266 - Abhijit Roy CHOUDARY'],
    isMultiple: true
  },
  {
    columnName: 'month',
    displayName: 'Month',
    isSticky: false,
    type: 'select',
    propertyData: ['January', 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September', 'October', 'November', 'December'],
    isMultiple: false
  },
  {
    columnName: 'year',
    displayName: 'Year',
    isSticky: false,
    type: 'select',
    propertyData: [2020, 2021],
    isMultiple: false
  }
];

export const ReportTemplateForTable = [
  {
    columnName: 'project',
    displayName: 'Project',
    isSticky: true,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '1',
    displayName: '1',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '2',
    displayName: '2',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '3',
    displayName: '3',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '4',
    displayName: '4',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '5',
    displayName: '5',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '6',
    displayName: '6',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '7',
    displayName: '7',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '8',
    displayName: '8',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '9',
    displayName: '9',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '10',
    displayName: '10',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '11',
    displayName: '11',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '12',
    displayName: '12',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '13',
    displayName: '13',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '14',
    displayName: '14',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '15',
    displayName: '15',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '16',
    displayName: '16',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '17',
    displayName: '17',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '18',
    displayName: '18',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '19',
    displayName: '19',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '20',
    displayName: '20',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '21',
    displayName: '21',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '22',
    displayName: '22',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '23',
    displayName: '23',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '24',
    displayName: '24',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '25',
    displayName: '25',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '26',
    displayName: '26',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '27',
    displayName: '27',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '28',
    displayName: '28',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '29',
    displayName: '29',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  },
  {
    columnName: '30',
    displayName: '30',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: '31',
    displayName: '31',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: true
  },
  {
    columnName: 'total',
    displayName: 'Total',
    isSticky: false,
    type: 'select',
    propertyData: [],
    isWeekend: false
  }
];

export const ReportColumnsToBeDisplayed = ['project', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', 'total'];

export const ReportDatasource = [
  {
    project: '1035014D05',
    1: '',
    2: '',
    3: '',
    4: '4',
    5: '8',
    6: '4',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
    19: '',
    20: '',
    21: '',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '',
    28: '',
    29: '',
    30: '',
    31: '',
    total: '16'
  },
  {
    project: '1846002D01',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '4',
    7: '8',
    8: '8',
    9: '',
    10: '',
    11: '8',
    12: '8',
    13: '4',
    14: '8',
    15: '8',
    16: '',
    17: '',
    18: '8',
    19: '8',
    20: '4',
    21: '8',
    22: '8',
    23: '',
    24: '',
    25: '8',
    26: '8',
    27: '4',
    28: '8',
    29: '8',
    30: '',
    31: '',
    total: '128'
  },
  {
    project: 'ABS0001',
    1: '8',
    2: '',
    3: '',
    4: '4',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    13: '4',
    14: '',
    15: '',
    16: '',
    17: '',
    18: '',
    19: '',
    20: '4',
    21: '',
    22: '',
    23: '',
    24: '',
    25: '',
    26: '',
    27: '4',
    28: '',
    29: '',
    30: '',
    31: '',
    total: '24'
  },
  {
    project: '',
    1: '8',
    2: '',
    3: '',
    4: '8',
    5: '8',
    6: '8',
    7: '8',
    8: '8',
    9: '',
    10: '',
    11: '8',
    12: '8',
    13: '8',
    14: '8',
    15: '8',
    16: '',
    17: '',
    18: '8',
    19: '8',
    20: '8',
    21: '8',
    22: '8',
    23: '',
    24: '',
    25: '8',
    26: '8',
    27: '8',
    28: '8',
    29: '8',
    30: '',
    31: '',
    total: '168'
  }
];

export const ReportUserDetails = [
  {
    perId: 'id851321',
    name: 'LAZARUS Kranthi Kumar',
    orgUnit: 'DTI-ITS-ETS-COS-HR',
    manager: 'HONGENAERT Francis'
  },
  {
    perId: 'id840266',
    name: 'ROYCHOUDHARY Abhijit',
    orgUnit: 'DTI-ITS-ETS-COS-HR',
    manager: 'HONGENAERT Francis'
  }
];
