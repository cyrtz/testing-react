import { useState } from "react";
import React from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <div data-test-id="counter-value">{count}</div>
            <button data-test-id="increment-button" onClick={increment}>+</button>
            <button data-test-id="decrement-button" onClick={decrement}>-</button>
        </>
    )
}

export default Counter;