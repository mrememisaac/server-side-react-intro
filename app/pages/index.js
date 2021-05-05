import React from 'react';

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state =  { time: new Date().toLocaleString()}
    }

    tick(){
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            });
        });
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentDidUnMount() {
        this.clearInterval(this.interval);
    }

    render() {
        return <h1>{this.state.time}</h1>
    }
} 
export default Index;