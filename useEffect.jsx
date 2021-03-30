// import React, { Component } from 'react'
// class HookUseEffectRender extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { count: 0 }
//     }
//     componentDidMount() {
//         document.title = `Clicked ${this.state.count} times`
//     }
//     componentDidUpdate() {
//         document.title = `Clicked ${this.state.count} times`
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Count {this.state.count} times</button>
//             </div>
//         )
//     }
// }
import React, { useState, useEffect } from 'react'
function HookUseEffectRender() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}
export default HookUseEffectRender