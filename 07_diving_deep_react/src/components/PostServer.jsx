import React, {Component} from 'react';
import axios from "axios";

class PostServer extends Component {
    constructor() {
        super();
        this.state={
            postData:"",
            postStatus:""
        }
    }
    submitHandler = (event)=>{
        const postUri="https://jsonplaceholder.typicode.com/posts";
        axios.post(postUri,this.state.postData)
            .then(data=>{
                console.log("server responded with status: "+data.status);
                this.setState({postStatus:data.status});
            })
            .catch(error=>console.log("error posting data.."));
    };

    onChangeHandler = (event)=>{
        var inputdata=event.target.value;
        this.setState({postData:inputdata}) ;
    }
    render() {
        return (
            <div>
                <p>postdata: {this.state.postData}</p>
                <p>status: {this.state.postStatus}</p>
                <input onChange={this.onChangeHandler} name="postData" type="text" placeholder="enter team name"/>
                <input onClick={this.submitHandler} type="submit" value="submit"/>
            </div>
        );
    }
}

export default PostServer;