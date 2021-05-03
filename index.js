class Hello extends React.Component {
    render() {
        return React.createElement('h1', {
            className: 'orange'
        }, `Hi there! @ ${this.props.time}`);
    }
} 
ReactDOM.render(React.createElement(Hello,{ time: new Date()}, null), document.getElementById("app"));