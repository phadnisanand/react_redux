import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoReducer";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (input.length > 1) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          todo: input,
        })
      );
      setInput("");
    }
  };
  return (
    <form
      className="container d-flex justify-content-center mt-5"
      onSubmit={submit}
    >
      <input
        type="text"
        className="form-control w-75"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-success ms-2" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
