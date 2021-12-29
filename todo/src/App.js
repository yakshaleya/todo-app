import React, { useState } from "react";
import { Button } from "@mui/material";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (id) => {
    console.log("deleted");
    setTodos((todos) => {
      return todos.filter((arrel, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <h1>Hello what you want to do today</h1>
      <form>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          disabled={!input}
          type="submit"
          className="todo-button"
          onClick={addTodo}
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo text={todo} inde={index} data={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
