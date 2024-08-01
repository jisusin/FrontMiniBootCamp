import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = ({ todos }) => {
  const [date, setDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const goToToday = () => {
    const today = new Date();
    setDate(today);
    setViewDate(today);
  };

  const onActiveStartDateChange = ({ activeStartDate }) => {
    setViewDate(activeStartDate);
  };

  const tileClassName = ({ date, view }) => {
    const day = date.getDay();

    if (view === 'month') {
      if (day === 6) return 'saturday';
      if (day === 0) return 'sunday';
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    if (view === 'month' && isToday) {
      return <div className="todo-dot" />;
    }

    const hasTodos = todos.some((todo) => {
      const todoDate = new Date(todo.date);
      return date.toDateString() === todoDate.toDateString();
    });

    if (view === 'month' && hasTodos) {
      return <div className="todo-dot" />;
    }

    return null;
  };

  return (
    <div className="custom-calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-title">📆 Calendar</h2>
        <button onClick={goToToday}>Today !</button>
      </div>
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={tileClassName}
        tileContent={tileContent}
        onActiveStartDateChange={onActiveStartDateChange}
      />
      <div className="selected-date">
        Selected date: {date.toDateString()}
        <ul>
          {todos
            .filter((todo) => new Date(todo.date).toDateString() === date.toDateString())
            .map((todo, index) => (
              <li key={index}>{todo.task}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomCalendar;