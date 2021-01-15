import './signin.styles.scss'
import { Component } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email:'', password:''})
        }
        catch (err) {
            console.log(err)
        }
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
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In with Google </CustomButton>
                    </div>

                </form>
            </h2>
        </div> );
    }
}
 
export default SignIn;