import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  let markAllDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        {
          return {
            ...todo,
            isDone: true,
          };
        }
      });
    });
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>TodoList</h3>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <hr />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {" "}
              {todo.task}
            </span>
            &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={markAllDone}>Mark all as Done</button>
    </div>
  );
}
