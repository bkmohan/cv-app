import React, {Component} from "react";
import Header from "./components/Header";
import ProfileForm from "./components/ProfileForm";
import ProfileView from "./components/ProfileView";
import uniqid from "uniqid";
import JsPDF from 'jspdf';

import './styles/App.css'

class App extends Component{

  constructor(){
    super();

    this.state = {
      personalDetails : {
                          name:'Ashok Kumar', 
                          role:'Doftware Engineer', 
                          phone:'988556444', 
                          email:'ashokkumar@gmail.com', 
                          location:'Bengaluru, India',
                          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'},
      experience : [
        { id : uniqid(),
          company : 'Facebook Inc.',
          position : 'Senior Web Developer',
          startDate : '2019',
          endDate : '',
          details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac phdsf.'
        },
        { id : uniqid(),
          company : 'Tesla Inc.',
          position : 'Junior Web Developer',
          startDate : '2017',
          endDate : '2019',
          details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac phdsf.'
        },
        { id : uniqid(),
          company : 'Google LLC',
          position : 'UI / UX Designer',
          startDate : '2016',
          endDate : '2017',
          details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac phdsf.'
        }
      ],
      education : [
        { id : uniqid(),
          course : "MSc in Computer Enginnering",
          university : 'BITS Pilani',
          startDate : '2017',
          endDate : '2018',
          details: "Master's degree"
        },
        { id : uniqid(),
          course : "Bachelor's of Engineering",
          university : 'PEX University',
          startDate : '2012',
          endDate : '2016',
          details: "Bachelor's degree"
        }
      ]
    }

    this.updatePersolnalDetails = this.updatePersolnalDetails.bind(this);
    this.addDetails = this.addDetails.bind(this);
    this.deleteDetial = this.deleteDetial.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.resetState = this.resetState.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }

  componentDidMount(){
    document.title = "Resume Builder"
  }

  resetState = () => {
    this.setState({personalDetails:{
      name: '',
      role: '',
      phone: '',
      email: '',
      location: '',
      summary: '',
    }, experience:[], education:[]})

  }

  updatePersolnalDetails = (key, value) => {
        this.setState({personalDetails : {...this.state.personalDetails, [key] : value}});
  }

  addExperience = () => {
    let newExperince = this.state.experience.concat(
      { id : uniqid(),
        company : '',
        position : '',
        startDate : '',
        endDate : '',
        details : ''
      }
    )
      
    this.setState({experience : newExperince})
  }

  addEducation = () => {
    let newEdu = this.state.education.concat(
      { id : uniqid(),
        course : "",
        university : '',
        startDate : '',
        endDate : '',
        details: ''
      }
    )
    this.setState({education : newEdu})
  }

  deleteExperience = (id) => {
    let newExperience = this.state.experience.filter( record => record.id !== id)
    this.setState({experience : newExperience})
  }

  deleteEducation = (id) => {
    let newEducation = this.state.education.filter( record => record.id !== id)
    this.setState({education : newEducation})
  }

  updateExperience = (id, key, value) => {
      let newExperience = this.state.experience.map(record => {
          if(record.id === id){
              record[key] = value;
          }
          return record
      })

      this.setState({experience : newExperience})
  }

  updateEducation = (id, key, value) => {
    let newEducation = this.state.education.map(record => {
      if(record.id === id){
          record[key] = value;
      }
      return record
  })
    this.setState({education : newEducation})
}

  addDetails = (text) => {
    if(text === 'Experience') this.addExperience();
    else this.addEducation();
  }

  deleteDetial = (text, id) => {
    if(text === 'Experience') this.deleteExperience(id);
    else this.deleteEducation(id);
  }

  updateDetail = (text, id, key, value) => {
    if(text === 'Experience') this.updateExperience(id, key, value);
    else this.updateEducation(id, key, value);
  }

  generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('.profile-view')).then(() => {
        let name = this.state.personalDetails.name
        let filename = name ? name + '_resume.pdf' : 'resume.pdf'
        report.save(filename);
    });
  }

  render() {

    return <> 
      <Header reset={this.resetState} pdf={this.generatePDF}></Header>
      <div className="content">
        <ProfileForm data={this.state} updateDetail={this.updateDetail} updatePersolnalDetails={this.updatePersolnalDetails} addDetails={this.addDetails} deleteDetail={this.deleteDetial} ></ProfileForm>
        <ProfileView data={this.state}></ProfileView>
      </div>
    </>
  }
}


export default App