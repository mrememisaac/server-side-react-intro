import React from 'react';
import DigitalClock from '../src/DigitalClock/DigitalClock'

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state =  { time: new Date() }
    }    

    render() {
        return <DigitalClock time={this.state.time}/>
    }
} 
export default Index;