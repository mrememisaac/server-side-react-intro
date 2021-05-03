class Hello extends React.Component {

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
        return React.createElement('h1', {
            className: 'orange'
        }, `${this.state.time}`);
    }
} 
ReactDOM.render(React.createElement(Hello,{ time: new Date()}, null), document.getElementById("app"));