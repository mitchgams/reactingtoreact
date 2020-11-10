import React, { Component } from 'react';

/*const App = (props) => {
let element = <h1>Hello, my name is {props.myName}</h1>;
    return element;
}

export default App;*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.myName,
            text: this.props.text
        }
    }

    handleChange(value) {
        this.setState({text: value});
    }

    handleHasLoaded() {
        this.state.hasLoaded ? this.setState({hasLoaded: false}) : this.setState({hasLoaded: true});
    }

    componentDidMount() {
        this.setState({hasLoaded: true});
    }

    render() {
        if(!this.state.hasLoaded) {
            return <React.Fragment><h1>Loading...</h1><button onClick={() => this.handleHasLoaded()}>Toggle Has Loaded</button></React.Fragment>;
        } else {
            return (
                <React.Fragment>
                    And what? <input placeholder={this.state.text} onChange={(e) => this.handleChange(e.target.value)} />
                    <h1>Hello my name is {this.state.name} and {this.state.text}</h1>
                    <button onClick={() => this.handleHasLoaded()}>Toggle Has Loaded</button>
                </React.Fragment>
            );
        }
    }
}

export default App;