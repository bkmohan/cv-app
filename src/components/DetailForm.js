import React, {Component} from "react";
import uniqid from "uniqid";

class Buttons extends Component{
    constructor(props){
        super(props);
        this.addNewUnit = this.addNewUnit.bind(this);
        this.deleteUnit = this.deleteUnit.bind(this);
    }
    addNewUnit(){
        this.props.addDetails(this.props.unit)
    }

    deleteUnit(){
        this.props.deleteDetail(this.props.unit, this.props.id)
    }
    
    render() {

        return <div className="btn-holder">
            {this.props.noForm && <button className="form-btn" onClick={this.deleteUnit}>Delete</button>}
            {this.props.newForm && <button className="form-btn" onClick={this.addNewUnit}>Add</button>}
        </div>
    }
}

class DetailUnit extends Component{
    constructor(props){
        super(props);
        this.state = this.props.inputs;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
            let inputKey = event.target.getAttribute('name');
            this.props.updateDetail(this.props.unit, this.props.dataId, inputKey, event.target.value)
            this.setState({[inputKey]: event.target.value})
        }
    

    getInput(type, name, placeholder){
        return <input key={this.props.dataId + name}  type={type} name={name}
                    placeholder={placeholder} value={this.state[name]} onChange={this.handleChange}/>
    }

    render(){
        let inputFields = [];

        if(this.props.inputs){
            for(let key in this.props.inputs){
                if(key !== 'id'){
                    inputFields.push(this.getInput(this.props.placeholders[key].type, key, 
                        this.props.placeholders[key].placeholder))
                }
            }
        }
        else{
            for(let key in this.props.placeholders){
                inputFields.push(this.getInput(this.props.placeholders[key].type, key, '', this.props.placeholders[key].placeholder))
            }
        }
       
        inputFields.push(<Buttons key={uniqid()} id={this.props.dataId} unit={this.props.unit} deleteDetail={this.props.deleteDetail} addDetails={this.props.addDetails} newForm={this.props.last} noForm={true}></Buttons>)
        
        return <div className="detail-unit">
                    {inputFields}
                </div>
    }
}


class DetailForm extends Component{

    render() {
        let detailUnit = [];
    
        if(this.props.details.length !== 0){
            detailUnit = this.props.details.map((record, i, records) => {
                if(i+1 === records.length){
                    return <DetailUnit key={record.id} dataId={record.id} updateDetail={this.props.updateDetail} addDetails={this.props.addDetails} deleteDetail={this.props.deleteDetail} unit={this.props.title} inputs={record} placeholders={this.props.placeholders} last={true}></DetailUnit>
                }
                    return <DetailUnit key={record.id} dataId={record.id} updateDetail={this.props.updateDetail} addDetails={this.props.addDetails} deleteDetail={this.props.deleteDetail} unit={this.props.title} inputs={record} placeholders={this.props.placeholders} last={false}></DetailUnit>
            })
        }
        else{
            detailUnit.push(<Buttons unit={this.props.title} addDetails={this.props.addDetails} newForm={true}> noForm={false}</Buttons>)
        }
     

        return <div className="unit-form">
                    <p className="unit-title">{this.props.title}</p>
                    {detailUnit}
                </div>
    }
}

export default DetailForm