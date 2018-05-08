import React, {Component} from 'react';
import {db} from '../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../actions';
import '../assets/css/chat.css';
import InputMessage from './input_message';

class Chat extends Component {

    componentDidMount(){
        this.scrollChat();
        db.ref('/chat').on('value', snapshot => {
            console.log(snapshot.val());
            this.props.updateChat(snapshot.val());
            // this.refs.chatMessages.scrollTop = this.refs.chatMessages.scrollHeight;
        });
    }

    componentDidUpdate(){
        this.scrollChat();
    }

    scrollChat(){
        this.refs.chatBottom.scrollIntoView();
    }

    render(){
        console.log('Chat log: ', this.props.log);

        const messages = [];

        for(let [k, v] of Object.entries(this.props.log)){
            const message = (
                <p key={k}>
                    <b>{v.author}: </b>
                    <span>{v.message}</span>
                </p>
            );

            messages.push(message);
        }
        
        return (
            <div className='container chat'>
                <h1 className='center'>Jeff Zone</h1>
                <div className='messages'>
                    {messages}
                    <div ref='chatBottom' style={{float: 'left', clear: 'both'}} />
                </div>
                <InputMessage />
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        log: state.chat.log
    }
}


export default connect(mapStateToProps, {updateChat})(Chat);