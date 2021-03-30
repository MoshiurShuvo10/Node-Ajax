import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state={
            welcomeMessage:"Welcome Visitor"
        }
    }

    buttonHandler=(event)=>{
        this.setState({welcomeMessage:"Thanks for subscribing"});
    };
    render() {
        return (
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <button onClick={this.buttonHandler}>Subscribe</button>
            </div>
        );
    }
}

export default Message;