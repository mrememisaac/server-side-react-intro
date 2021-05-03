class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state =  { time: new Date().toLocaleString()}
    }

    render() {
        return React.createElement('h1', {
            className: 'orange'
        }, `Hi there! @ ${this.state.time}`);
    }
} 
ReactDOM.render(React.createElement(Hello,{ time: new Date()}, null), document.getElementById("app"));