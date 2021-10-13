import { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import List from "./List";

function App() {
  let [todos, setTodos] = useState([]);

  function addTodo(item) {
    let newTodos = [...todos, item];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
