import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Card from './card';
import RenderInput from './render_input';
import {connect} from 'react-redux';
import {signIn} from '../actions';

class SignIn extends Component{

    handleSignIn(values){
        console.log('Sign In info:', values);
        this.props.signIn(values);
    }

    render(){

        const {handleSubmit} = this.props;

        return (
            <Card title='Sign In'>
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))} >
                                <Field name='email' label='Email' component={RenderInput} />
                                <Field name='password' label='Password' component={RenderInput} type='password' />
                                <button className='btn'>Sign In</button>
                            </form>
            </Card>
        );
    }
}

function validate(values){
    const {email, password} = values;
    const errors = {};

    if(!email) errors.email = 'Please enter your email';
    if(!password) errors.password = 'Please enter your password';

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in'
})(SignIn);

export default connect(null, {signIn})(SignIn);