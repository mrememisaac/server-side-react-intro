import React from 'react';

class DigitalClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time
        }
    }

    tick() {
        this.setState(() => {
            return ({
                time: new Date()
            });
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentDidUnMount() {
        this.clearInterval(this.interval);
    }

    render() {
        const seconds = this.state.time.getSeconds() < 10 ? `0${this.state.time.getSeconds()}` : this.state.time.getSeconds();
        const minutes = this.state.time.getMinutes() < 10 ? `0${this.state.time.getMinutes()}` : this.state.time.getMinutes();
        const hours = this.state.time.getHours() < 10 ? `0${this.state.time.getHours()}` : this.state.time.getHours();
        const now = `${hours}  : ${minutes} : ${seconds}`;
        return <h1 className="clock">{now}</h1>
    }
}
DigitalClock.propTypes = {}
DigitalClock.defaultProps = {}
export default DigitalClock;