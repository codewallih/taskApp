import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "./action";
import Swal from "sweetalert2";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedTask.trim()) {
      dispatch(editTodo(todo.id, editedTask));
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    Swal.fire({
      title: todo.completed ? "Mark as Incomplete?" : "Mark as Complete?",
      text: todo.completed
        ? "This task will be marked as incomplete."
        : "This task will be marked as complete.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(toggleTodo(todo.id));
        Swal.fire(
          "Updated!",
          `Task has been marked as ${
            todo.completed ? "incomplete" : "complete"
          }.`,
          "success"
        );
      }
    });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? "list-group-item-success" : ""
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span
          onClick={handleToggle}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.task}
        </span>
      )}
      <div>
        <button className="btn btn-sm btn-success me-2" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="btn btn-sm btn-danger me-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          🗑 Delete
        </button>
        <button
          className={`btn btn-sm ${
            todo.completed ? "btn-success" : "btn-secondary"
          }`}
          onClick={handleToggle}
        >
          {todo.completed ? "Completed" : "Incomplete"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
