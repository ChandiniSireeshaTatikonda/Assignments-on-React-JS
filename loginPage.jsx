import React, { Component } from 'react'
class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            userName: " ",
            userEmail: " ",
            userPassword: " "
        }
    }
    handleUserName = (event) => {
        this.setState({ userName: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ userEmail: event.target.value })
    }

    handlePassword = (event) => {
        this.setState({ userPassword: event.target.value })
    }
    handleButtonOne = () => {
        this.setState({
            isLogged: true
        })
    }
    handleButtonTwo = (event) => {
        this.setState({
            userName: " ",
            userEmail: " ",
            userPassword: " ",
            isLogged: false
        })
    }

    formSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        if (this.state.isLogged) {
            return (
                <div>
                    <h1>Hi {this.state.userName} Welcome to this page</h1>
                    <button type="submit" onClick={this.handleButtonTwo}>Logout</button>
                </div>)
        }
        else {
            return (
                <div>
                    <h1>Hello please login</h1>
                    <form onSubmit={this.formSubmit}>
                        <label><b>User Name:</b></label>
                        <input type="text" onChange={this.handleUserName} ></input><br></br>

                        <label><b>EMail:</b></label>
                        <input type="email" onChange={this.handleEmail}></input><br></br>

                        <label><b>Password:</b></label>
                        <input type="password" onChange={this.handlePassword}></input><br></br>
                        <button type="submit" onClick={this.handleButtonOne}>Login</button>
                    </form>
                </div>)

        }
    }
}
export default LogInPage