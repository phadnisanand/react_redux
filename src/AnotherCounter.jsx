import React from "react";
import { store } from './redux/Store';
import { incrementByAmount } from './redux/counterSlice';
import { useSelector, useDispatch } from "react-redux";
function AnotherCounter(props) {
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <>
            Another component {data.value}
            <button onClick={() => dispatch(incrementByAmount(10))}>By amount</button>
        
        </>
    )
}
export default AnotherCounter;