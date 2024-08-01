import React, { useState } from 'react';

const Todo = ({ todos, addTodo, removeTodo, updateTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo({
        text: newTodo,
        date: selectedDate,
        done: false,
      });
      setNewTodo('');
    }
  };

  const handleToggleDone = (index) => {
    const updatedTodo = { ...todos[index], done: !todos[index].done };
    updateTodo(index, updatedTodo);
  };

  const handleUpdateTodo = (index, text) => {
    const updatedTodo = { ...todos[index], text };
    updateTodo(index, updatedTodo);
  };

  return (
    <div className="todo-container">
      <h2>ToDo List</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="New ToDo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleDone(index)}
            />
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleUpdateTodo(index, e.target.value)}
            />
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;