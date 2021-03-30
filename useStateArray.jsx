import React, { useState } from 'react'
function HookUseStateArray() {
    const [items, setItems] = useState([])
    const addItems = () => {
        // When dealing with the objects or arrays always make sure to spread your state variable and then call the setter function 
        setItems([...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItems}>AddItems</button>
            <ul>
                {items.map(item =>
                    <li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}
export default HookUseStateArray