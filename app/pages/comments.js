import React, { Component } from 'react'
import axios from 'axios'

export default class comments extends Component {
    static async getInitialProps(){
        let promise = await axios.get("http://localhost:4000/comments")
        .then(response => {
            return {
                isSuccessful: true,
                comments: response.data
            }
        })
        .catch(error => {
            return {
                isSuccessful: false,
                message: error.message,
                comments: []
            }
        })
        return promise;
    }

    constructor(props){
        super(props);
        this.state = {
            isSuccessful: props.isSuccessful,
            message: props.message,
            comments: props.comments
        }
    }

    render() {
        return (
            <div>
                <span>{this.state.message}</span>
                {this.state.comments.map((comment) => 
                    <div>
                        <p key={`c${comment.id}`}>{comment.body}</p>                          
                    </div>
                )}
            </div>
        )
    }
}
