import React, { Component } from 'react'
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: new Date() }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: new Date() })
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval();
    }
    render() {
        return (
            <div>
                {/* <h1>The time is now {this.state.counter.getHours()} Hours {this.state.counter.getMinutes()} Minutes {this.state.counter.getSeconds()} Seconds</h1>  */}
                <h1>The time is now {this.state.counter.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default Timer