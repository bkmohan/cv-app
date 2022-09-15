import React, {Component} from "react";
import '../styles/ProfileForm.css'
import DetailForm from "./DetailForm";
import PersonalForm from "./PersonalForm";

class ProfileForm extends Component{
    workDetails = {
        company : {placeholder: 'Company', type: 'text'},
        position : {placeholder: 'Position', type: 'text'},
        startDate : {placeholder: 'Start Date', type: 'text'},
        endDate : {placeholder: 'End Date', type: 'text'},
        details : {placeholder: 'Details', type: 'text'},
    }


    eduDetails = {
        course : {placeholder: 'Course / Program', type: 'text'},
        university : {placeholder: 'University', type: 'text'},
        startDate : {placeholder: 'Start Date', type: 'text'},
        endDate : {placeholder: 'End Date', type: 'text'},
        details : {placeholder: 'Details', type: 'text'},
    }

    render() {
        return <div className="profile-form">
            <PersonalForm details={this.props.data.personalDetails} updateDetails={this.props.updatePersolnalDetails}></PersonalForm>
            <DetailForm title='Experience' updateDetail={this.props.updateDetail} addDetails={this.props.addDetails} deleteDetail={this.props.deleteDetail} details={this.props.data.experience} placeholders={this.workDetails}></DetailForm>
            <DetailForm title='Education' updateDetail={this.props.updateDetail} addDetails={this.props.addDetails} deleteDetail={this.props.deleteDetail} details={this.props.data.education} placeholders={this.eduDetails}></DetailForm>
        </div>
    }
}


export default ProfileForm