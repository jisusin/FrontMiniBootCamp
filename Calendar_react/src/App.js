import React, { useState } from 'react';
import './App.css';
import CustomCalendar from './components/CustomCalendar';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Board from './components/Board';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('calendar');
  const [todos, setTodos] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = (username, password, email) => {
    const user = { username, password, email };
    setUsers([...users, user]);
    setShowRegister(false);
  };

  const addTodo = (todo) => setTodos([...todos, todo]);
  const removeTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  const updateTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(newTodos);
  };

  const renderView = () => {
    switch (view) {
      case 'calendar':
        return <CustomCalendar todos={todos} />;
      case 'todo':
        return <Todo todos={todos} addTodo={addTodo} removeTodo={removeTodo} updateTodo={updateTodo} />;
      case 'board':
        return <Board />;
      default:
        return <CustomCalendar todos={todos} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          {showRegister ? (
            <Register onRegister={handleRegister} setShowRegister={setShowRegister} />
          ) : (
            <Login onLogin={handleLogin} setShowRegister={setShowRegister} />
          )}
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setView={setView} />
        {renderView()}
      </header>
    </div>
  );
}

export default App;
