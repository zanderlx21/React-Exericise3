import React, { useState } from "react";

function Counter() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    return (
        <div className="3counters">
            <div className="Counter1">
                <button id="up" onClick={() => setCounter1((count) => count + 1)}>Up</button>
            <p>{{counter1}}</p>
               <button id="down" onClick={() => setCounter1((count) => count - 1)}>Up</button>
            </div>

            <div className="Counter2">
                <button id="up" onClick={() => setCounter2((count) => count + 1)}>Up</button>
            <p>{{counter2}}</p>
               <button id="down" onClick={() => setCounter2((count) => count - 1)}>Up</button>
            </div>

            <div className="Counter3">
                <button id="up" onClick={() => setCounter3((count) => count + 1)}>Up</button>
            <p>{{counter3}}</p>
               <button id="down" onClick={() => setCounter3((count) => count - 1)}>Up</button>
            </div>
        </div>
    )
}

export default Counter;