import React from 'react';
import axios from 'axios';
import DigitalClock from '../src/DigitalClock/DigitalClock'

class Posts extends React.Component {

    static async getInitialProps() {
        let promise = await axios.get("http://localhost:4000/posts")
        .then(response => {
            return {
                hasErrored: false,
                posts: response.data
            }
        }).catch(error => {
            return {
                hasErrored: true,
                message: error.message
            }
        });
        return promise;
    }

    constructor(props){
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            posts: props.posts
        }
    }    

    render() {
         
        return ( 
            <div>
                {this.state.posts.map((post) => <div key={`d${post.id}`}>
                    <img key={post.guid} src={post.picture}/>
                    <h1 key={post.guid}>{post.title}</h1>
                    <p key={post.id}>{post.authors[0].name}</p>
                    <p key={post.id}>{post.abstract}</p>
                    <p key={post.id}>{post.body}</p></div>)
                }
            </div>)
    }
} 
export default Posts;