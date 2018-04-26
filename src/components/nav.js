import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions';

class Nav extends Component{

    renderLinks(){
        if(this.props.auth){
            return [
                <li key='0'>
                    Hello, {this.props.username}
                </li>,
                <li key='1'>
                    <Link to='/'>Home</Link>
                </li>,
                <li key='2'>
                    <Link to='/chat'>Chat</Link>
                </li>,
                <li key='3'>
                    <button onClick={this.props.signOut} className='btn teal accent-4'>Sign Out</button>
                </li>
            ]
        }

        return [
            <li key='0'>
                <Link to='/'>Home</Link>
            </li>,
            <li key='1'>
                <Link to='/sign-up'>Sign Up</Link>
            </li>,
            <li key='2'>
                <Link to='/sign-in'>Sign In</Link>
            </li>
        ]
    }

    render(){

        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>Jeff Fire Chat</Link>
                    <ul className='right'>
                        {this.renderLinks()}                        
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        username: state.user.username,
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut} )(Nav);