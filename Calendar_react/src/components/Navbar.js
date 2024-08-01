import React, { useState } from 'react';

const Navbar = ({ setView, currentView }) => {
  return (
    <nav>
      <button 
        className={currentView === 'calendar' ? 'active' : ''} 
        onClick={() => setView('calendar')}
      >
        캘린더
      </button>
      <button 
        className={currentView === 'todo' ? 'active' : ''} 
        onClick={() => setView('todo')}
      >
        할 일
      </button>
      <button 
        className={currentView === 'board' ? 'active' : ''} 
        onClick={() => setView('board')}
      >
        게시판
      </button>
    </nav>
  );
};

export default Navbar;
