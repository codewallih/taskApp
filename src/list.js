import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./item";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container mt-3">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
