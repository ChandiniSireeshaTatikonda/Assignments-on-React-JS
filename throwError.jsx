import React, { Component } from 'react';
class ErrorHandling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "chandu",
            message: "Bye"
        }
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ name: "siri" }) }, 3000);
    }
    render() {
        if (this.state.name === "siri") {
            throw new Error("Name changed");
        }
        return (
            <div>
                <h1> {this.state.name} </h1>
                <h2>Hey {this.state.message}</h2>
            </div>
        )
    }
}
export default ErrorHandling;