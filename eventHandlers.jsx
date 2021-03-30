import React, { Component } from 'react'
class EventHandlers extends Component {
    constructor(props) {
        super(props);
        this.state = { messageOne: "Hello1", messageTwo: "Hello2", messageThree: "Hello3", messageFour: "Hello4" }
        this.handleOver = this.handleOver.bind(this);
    }
    handleClickOne(name) {
        // this.setState({ messageOne: "Hi you bind me using arrow function way" })
        this.setState({ messageOne: name })
        console.log(name)
        // console.log(evs.type);
    }
    event = () => {
        this.setState({ messageTwo: "Hi you changed me using class property as arrow function" })
    }
    handleOver() {
        this.setState({ messageThree: "Hey you binded me in class constructor" })
    }
    handleClickTwo(name, ev) {
        // this.setState({ messageFour: "Hey you bind me in render method " })
        this.setState({ messageFour: name })
        console.log(ev.type);
    }

    render() {
        return (
            <div>
                {/* First way of passing arguments to EventHandlers  */}
                <h1 onClick={(name) => this.handleClickOne("I'm the First way of passing arguments to eventHandlers")}>{this.state.messageOne}</h1>

                <h1 onClick={this.event}>{this.state.messageTwo}</h1>

                <h1 onMouseOver={this.handleOver}>{this.state.messageThree}</h1>

                {/* Second way of passing arguments to eventHandlers  */}
                <h1 onMouseOut={this.handleClickTwo.bind(this, "I'm the Second way of passing arguments to eventHandlers")}>{this.state.messageFour}</h1>

            </div>
        )
    }
}
export default EventHandlers