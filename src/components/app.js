import React, { Component } from 'react';
import '../assets/css/app.css';
import Home from './home';
import Chat from './chat';
import Nav from './nav';
import {Route, withRouter} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import SignUp from './sign_up';
import SignIn from './sign_in';
import {auth} from '../firebase';
import {connect} from 'react-redux';
import {authorize} from '../actions';


class App extends Component {

	componentWillMount(){
		auth.onAuthStateChanged(user => {
			console.log('User is: ', user);
			this.props.authorize(user);
		});
	}

	render() {
		return (
		<div>
			<Nav />
			<Route exact path='/' component={Home} />
			<Route path='/chat' component={Chat} />
			<Route path='/sign-up' component={SignUp} />
			<Route path='/sign-in' component={SignIn} />
		</div>
		);
	}
}

export default withRouter(connect(null,{authorize})(App));
