import './signin-styles.scss'
import { Component } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: 'kkk@so.com', password: 'hhh' }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email:'', password:''})
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    render() { 
        return ( <div className="sign-in">
            <h2 className="d">
                <span className="sl">

                </span>
                <form onSubmit={this.handleSubmit} className="classname">
                    <FormInput type="email" name='email' value={this.state.email} handleChange={this.handleChange} label='email'/>
                    <FormInput type="password" name='password' value={this.state.password} handleChange={this.handleChange} label='password'/>
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </h2>
        </div> );
    }
}
 
export default SignIn;