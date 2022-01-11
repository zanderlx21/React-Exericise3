import React, { useState } from "react";

function Counter() {
    const [counter, setCounter1] = useState(0);

    return (
        <div className="Counter">
                <button id="up" onClick={() => setCounter1((count) => count + 1)}>Up</button>
            <p>{{counter}}</p>
               <button id="down" onClick={() => setCounter1((count) => count - 1)}>Up</button>
        </div>
    )
}

export default Counter;