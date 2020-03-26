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
        return <div className="signup">
            <h1>Please enter username:</h1>
            <input type="text" onKeyDown={this.handleChange}/>
        </div>
    }
}

export default SingUp;