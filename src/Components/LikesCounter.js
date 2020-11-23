import React, {useState} from "react";

function Counter(props) {
    const [count, setCount] =useState(0);

    const handleIncrement =() => {
        setCount(prevCount => prevCount + 1);
    };

    // const handleDecrement = () => {
    //     setCount(prevCount => preCount - 1);

    return (
        <div>
            <div>
                {/* //* <button onClick={handleDecrement} id={props.id}>-</button>
                <h5>Count is {count}</h5> *// */}
                <button onClick={handleIncrement} id={props.answerid}>+</button>
            </div>
        </div>
    )
}
export default Counter;