import React, {Component} from "react";
import '../styles/header.css'

class Header extends Component{

    render(){
        return <div className="header">
                <div>
                    <h1>Resume Builder</h1>
                </div>
                <div className="btn-container">
                    <button id="print-btn" onClick={this.props.pdf}>Save</button>
                    <button id="reset-btn" onClick={this.props.reset}>Reset</button>
                </div>
            </div>
    }
}

export default Header;
