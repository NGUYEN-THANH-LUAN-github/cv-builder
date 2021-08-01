import React, { Component } from 'react'
import Form from '../Main/Form'
import Preview from '../Main/Preview'
import formatPhoneNumber from '../../modules/formatPhoneNumber'
// import emptyAvatar from '../assets/empty_avatar.png'
const uniqid = require('uniqid')

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      PI: {
        first_name: '',
        last_name: '',
        photo: null,
        email: '',
        phone_number: '',
        address: '',
        description: '',
      },
      EHs: [],
      PEs: [],
    }
  }

  updatePI = (e) => {
    const obj = {}
    const { id, value } = e.target
    if (id === 'phone_number') obj[id] = formatPhoneNumber(value)
    else obj[id] = value
    this.setState({
      PI: Object.assign(this.state.PI, obj),
    })
  }

  addEH = () => {
    this.setState({
      EHs: this.state.EHs.concat({
        key: uniqid(),
        school_name: '',
        city: '',
        degree: '',
        major: '',
        from: '',
        to: '',
      }),
    })
  }
  addPE = () => {
    this.setState({
      PEs: this.state.PEs.concat({
        key: uniqid(),
        company_name: '',
        city: '',
        position_title: '',
        main_tasks: '',
        from: '',
        to: '',
      }),
    })
  }

  updateEH = (e) => {
    const obj = {}
    const { id, value } = e.target
    obj[id] = value
    this.setState({
      EHs: this.state.EHs.map((EH) => {
        return EH.key === e.target.getAttribute('data-key')
          ? Object.assign(EH, obj)
          : EH
      }),
    })
  }
  updatePE = (e) => {
    const obj = {}
    const { id, value } = e.target
    obj[id] = value
    this.setState({
      PEs: this.state.PEs.map((PE) => {
        return PE.key === e.target.getAttribute('data-key')
          ? Object.assign(PE, obj)
          : PE
      }),
    })
  }

  deleteEH = (e) => {
    this.setState({
      EHs: this.state.EHs.filter(
        (EH) => EH.key !== e.target.getAttribute('data-key')
      ),
    })
  }

  deletePE = (e) => {
    this.setState({
      PEs: this.state.PEs.filter(
        (PE) => PE.key !== e.target.getAttribute('data-key')
      ),
    })
  }

  loadSample = () => {
    this.setState({
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
          company_name: 'Kita Nippon Business Cooperative',
          city: 'Fukuoka',
          position_title: 'Support Division Member',
          main_tasks: 'Translation, Interpretation',
          from: '2019-10',
          to: '2020-03',
        },
        {
          key: uniqid(),
          company_name: 'Power Cooperative',
          city: 'Fukuoka',
          position_title: 'Translator/Interpretor',
          main_tasks: 'Translation, Interpretation',
          from: '2020-04',
          to: '2021-08',
        },
      ],
    })
  }

  reset = () => {
    this.setState({
      PI: {
        first_name: '',
        last_name: '',
        email: '',
        photo: null,
        phone_number: '',
        address: '',
        description: '',
      },
      EHs: [],
      PEs: [],
    })
  }

  uploadPhoto = e => {
    this.setState({
      PI: Object.assign(this.state.PI, { photo: URL.createObjectURL(e.target.files[0]) }),
    })
    console.log(e.target.files[0])
    console.log(URL.createObjectURL(e.target.files[0]))
  }

  render() {
    const { PI, EHs, PEs } = this.state
    return (
      <main className='Main'>
        <Form
          PI={PI}
          uploadPhoto={this.uploadPhoto}
          loadSample={this.loadSample}
          reset={this.reset}
          updatePI={this.updatePI}
          EHs={EHs}
          addEH={this.addEH}
          updateEH={this.updateEH}
          deleteEH={this.deleteEH}
          PEs={PEs}
          addPE={this.addPE}
          updatePE={this.updatePE}
          deletePE={this.deletePE}
          state={this.state}
        />
        <Preview state={this.state} />
      </main>
    )
  }
}
