import React from 'react';
import './signup.css';
class SingUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setUsername: this.props.setUsername
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.key === "Enter"){
            this.state.setUsername(event.target.value);
        }
    }
        
    render () {
        return <div className="container">
            <div className="text-center">
                <img  className="logo img-fluid" src="./logo.png" alt="logo"/>
                <hr/>
                <label className="font-weight-bold mt-5" htmlFor="username">ENTER A USERNAME</label>
                <input type="text" id="username" className="form-control" onKeyDown={this.handleChange} placeholder="Yaatie" />
            </div>
        </div>
    }
}

export default SingUp;