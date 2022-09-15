import React, {Component} from "react";
import '../styles/ProfileView.css'
import phoneIcon from '../icons/phone.png'
import emailIcon from '../icons/email.png'
import locationIcon from '../icons/location.png'


class PersonalHeader extends Component{

    render() {
        let {name, role, phone, email, location, summary} = {...this.props.details};
        
        return <div className="personal-detail">
                    <div className="personal-header">
                        <div className="title">
                            <h2>{name}</h2>
                            <p>{role}</p>
                        </div>
                        <div className="contact-details">
                            <p>
                                <img className="icon" src={phoneIcon} alt="contacr"/>
                                {phone}</p>
                            <p>
                                <img className="icon" src={emailIcon} alt="email"/>
                                {email}</p>
                            <p>
                                <img className="icon" src={locationIcon} alt="location"/>
                                {location}</p>
                        </div>
                    </div>
                    <div className="personal-summary">
                        {summary}
                    </div>
                </div>
    }
}


class Experience extends Component{

    render(){
        let {id, company, position, startDate, endDate, details} = this.props.details;

        return <div className="experience">
            <div className="position">{position}</div>
            <div className="company-container">
                <div className="comapny">{company}</div>
                <div className="duration">{startDate} - {endDate}</div>
            </div>
            <div className="details">{details}</div>
        </div>
    }
}


class Education extends Component{

    render(){
        let {id, course, university, startDate, endDate, details} = this.props.details;

        return <div className="education">
            <div className="edu-title">
                <div className="course">{course}</div>
                <div className="university">{university} | {startDate} - {endDate}</div>
            </div>
            <div className="details">{details}</div>
        </div>
    }
}

class ProfileView extends Component{

    render() {

        let experiences = [
                            <h3 key='we'>Work Experience</h3>, 
                            ...this.props.data.experience.map(record => 
                            <Experience key={record.id} details={record}></Experience>
                            )
                        ]

        let educations = [
                            <h3 key='we'>Education</h3>, 
                            ...this.props.data.education.map(record => 
                            <Education key={record.id} details={record}></Education>
                            )
                        ]

        return <div className="profile-view">
            <div className="profile-container">
                <PersonalHeader details={this.props.data.personalDetails}></PersonalHeader>
                <div className="exp-container">{experiences}</div>
                <div className="edu-container">{educations}</div>
            </div>
        </div>
    }
}


export default ProfileView