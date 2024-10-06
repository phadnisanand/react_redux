import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo }  from"./redux/todoReducer";

const EditTodo = () => {
  const [input, setInput] = useState("");
  let data = useSelector((state) => state.todos.allTodos);
  const id = useParams().id;
  data = data.filter((item) => item.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setInput(data[0].todo);
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(
        editTodo({
          id: data[0].id,
          todo: input,
        })
      );
      setInput("");
      navigate("/todos");
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

export default EditTodo;
