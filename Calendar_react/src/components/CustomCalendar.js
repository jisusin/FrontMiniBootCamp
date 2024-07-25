import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css'; // 위에서 작성한 CSS 파일을 import

const CustomCalendar = () => {
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
    const day = date.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    if (view === 'month') {
      if (day === 6) return 'saturday'; // Saturday
      if (day === 0) return 'sunday'; // Sunday
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    const today = new Date();
    if (
      view === 'month' &&
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return <div className="highlight-today-border"></div>;
    }
    return null;
  };

  return (
    <div className="custom-calendar-container">
      <div className="calendar-header">
        <h1 className="calendar-title">📆 Calendar</h1>
        <button onClick={goToToday} className="today-button">Today</button>
      </div>
      <Calendar
        onChange={onChange}
        value={date}
        activeStartDate={viewDate}
        onActiveStartDateChange={onActiveStartDateChange}
        tileClassName={tileClassName} // Apply custom class names to tiles
        tileContent={tileContent}
      />
      <p className="selected-date">Selected date : {date.toDateString()}</p>
    </div>
  );
};

export default CustomCalendar;
