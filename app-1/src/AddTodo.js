import React, { useState } from "react";

const AddTodo = (props) => {
  let [input, setInput] = useState("");

  function newTodo(e) {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  }

  return (
    <form className="addItemForm" onSubmit={newTodo}>
      <input
        type="text"
        placeholder="Add a todo!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};
export default AddTodo;
