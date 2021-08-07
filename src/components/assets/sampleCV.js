const uniqid = require('uniqid')

const sampleCV = {
  PI: {
    first_name: 'Nguyen',
    last_name: 'Thanh Luan',
    email: 'thanhluannguyenxyz@gmail.com',
    photo: 'sample',
    phone_number: '090-4444-5678',
    address: '福岡県福岡市＊＊＊＊＊１２-３４',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum culpa porro doloremque debitis quas dolorum necessitatibus sint tenetur fugiat ea, aspernatur, eligendi odit ipsum, recusandae nemo dolorem nostrum adipisci!',
  },
  EHs: [
    {
      key: uniqid(),
      school_name: 'Ritsumeikan Asia Pacific Uni',
      city: 'Beppu',
      degree: 'Bachelor of Business Administration',
      major: 'Accounting and Finance',
      from: '2015-09',
      to: '2019-09',
    },
  ],
  PEs: [
    {
      key: uniqid(),
      company_name: 'Kita Nippon Business Coop',
      city: 'Fukuoka',
      position_title: 'Support Division Member',
      main_tasks: 'Translation, Interpretation',
      from: '2019-10',
      to: '2020-03',
    },
    {
      key: uniqid(),
      company_name: 'Power Coop',
      city: 'Fukuoka',
      position_title: 'Translator/Interpretor',
      main_tasks: 'Translation, Interpretation',
      from: '2020-04',
      to: '2021-08',
    },
  ],
}

export default sampleCV
