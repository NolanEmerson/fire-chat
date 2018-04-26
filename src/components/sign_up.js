import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Card from './card';
import RenderInput from './render_input';
import {connect} from 'react-redux';
import {signUp} from '../actions';

class SignUp extends Component{

    handleSignUp(values){
        console.log('Sign Up info:', values);
        this.props.signUp(values);
    }

    render(){

        const {handleSubmit} = this.props;

        return (
            <Card title='Sign Up'>
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))} >
                                <Field name='email' label='Email' component={RenderInput} />
                                <Field name='username' label='Username' component={RenderInput} />
                                <Field name='password' label='Password' component={RenderInput} type='password' />
                                <Field name='confirmpassword' label='Confirm Password' component={RenderInput} type='password' />
                                <button className='btn'>Sign Up</button>
                            </form>
            </Card>
        );
    }
}

function validate(values){
    const {email, username, password, confirmpassword} = values;
    const errors = {};

    if(!email) errors.email = 'Please enter your email';
    if(!username) errors.username = 'Please enter your username';
    if(!password) errors.password = 'Please choose a password';
    if(password !== confirmpassword) errors.confirmpassword = 'Passwords do not match';

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up'
})(SignUp);

export default connect(null, {signUp})(SignUp);