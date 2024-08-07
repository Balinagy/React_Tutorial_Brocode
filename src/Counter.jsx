import { useState } from "react"

function Counter ()
{
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>
        {
            setCounter(counter+1);
        }
    const decrementCounter = () =>{
        setCounter(counter-1);
    }
    const resetCounter = () =>{
        setCounter(0);
    }

    return(
    <div className="counter-container">
        <p className="count-display">{counter}</p>
        <button className="counter-button" onClick={incrementCounter}>Increment</button>
        <button className="counter-button" onClick={decrementCounter}>Decrease</button>
        <button className="counter-button" onClick={resetCounter}>Reset</button>
    </div>
    );
}

export default Counter