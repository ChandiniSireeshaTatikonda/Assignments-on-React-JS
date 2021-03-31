import react, { Component } from 'react';
import withCounter from './HOC.jsx';

class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 2)