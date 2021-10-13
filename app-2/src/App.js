import React, { useState, useEffect } from "react";
import axios from "../node_modules/axios";
import "./App.css";
import List from "./List";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setList(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      {list.map((element, index) => {
        return <List name={element.name} key={index} />;
      })}
    </div>
  );
}

export default App;
