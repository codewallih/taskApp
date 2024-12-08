import React from "react";
import TodoInput from "./input";
import TodoList from "./list";
import './App.css';  // Import the CSS file for global styles

const App = () => {
  return (
    <div className="App container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="text-center mb-4 text-primary">Redux Task App</h1>
          <div className="card shadow-lg p-4 mb-4">
            <TodoInput />
          </div>
          <div className="card shadow-lg p-4">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
