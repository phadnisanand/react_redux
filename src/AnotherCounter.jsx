import React from "react";
import { store } from './redux/Store';
import { useSelector, useDispatch } from "react-redux";
function AnotherCounter(props) {
    const data = useSelector((state) => state.counter);
    return (
        <>
            Another component {data.value}
        </>
    )
}
export default AnotherCounter;