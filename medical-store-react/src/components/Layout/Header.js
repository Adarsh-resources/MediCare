import React, { useState } from 'react';

const Header = ({ onToggleSidebar, darkMode, onToggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="header-date">
          <i className="fa-regular fa-calendar"></i>
          <span>{getCurrentDate()}</span>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search patients, medicines, doctors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="header-actions">
          <button className="header-icon theme-toggle" onClick={onToggleDarkMode} title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className="header-icon emergency-btn" title="Emergency">
            <i className="fa-solid fa-kit-medical"></i>
          </button>
          <div className="notification-wrapper">
            <button className="header-icon notification-btn">
              <i className="fa-solid fa-bell"></i>
              <span className="notification-badge">5</span>
            </button>
          </div>
          <div className="user-profile">
            <img
              src="https://ui-avatars.com/api/?name=Dr+Admin&background=6366f1&color=fff"
              alt="User Avatar"
            />
            <div className="user-info">
              <span className="user-name">Dr. Admin</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
