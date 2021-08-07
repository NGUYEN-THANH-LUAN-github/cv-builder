const uniqid = require('uniqid')

const emptyCV = {
  PI: {
    first_name: '',
    last_name: '',
    photo: null,
    email: '',
    phone_number: '',
    address: '',
    description: '',
  },
  EH: {
    key: uniqid(),
    school_name: '',
    city: '',
    degree: '',
    major: '',
    from: '',
    to: '',
  },
  PE: {
    key: uniqid(),
    company_name: '',
    city: '',
    position_title: '',
    main_tasks: '',
    from: '',
    to: '',
  },
}

export default emptyCV
