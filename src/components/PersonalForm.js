import React, {Component} from "react";



class PersonalForm extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (text) => {
        return (event) => {
            this.props.updateDetails(text, event.target.value)
            return this.setState({[text]: event.target.value})
        }
    }

    render() {
        
        return <div className="unit-form">
            <p className="unit-title">Personal Details</p>
            <input type="text" placeholder="Name" maxLength="50" 
                            value={this.props.details.name} onChange={this.handleChange('name')}/>
            <input type="text" placeholder="Role" maxLength="50" 
                            value={this.props.details.role} onChange={this.handleChange('role')}/>
            <input type="tel" placeholder="Phone"
                            value={this.props.details.phone} onChange={this.handleChange('phone')}/>
            <input type="email" placeholder="Email"
                            value={this.props.details.email} onChange={this.handleChange('email')}/>
            <input type="text" placeholder="Location" maxLength="50"
                            value={this.props.details.location} onChange={this.handleChange('location')}/>
            <textarea type="text" className="summary" placeholder="Summary" maxLength="300"
                            value={this.props.details.summary} onChange={this.handleChange('summary')}></textarea>
        </div>
    }
}

export default PersonalForm