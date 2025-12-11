import React from 'react';

const QuickActions = ({ isOpen, onToggle }) => {
  const actions = [
    { icon: 'fa-user-plus', label: 'New Patient', color: 'primary' },
    { icon: 'fa-calendar-plus', label: 'New Appointment', color: 'success' },
    { icon: 'fa-prescription', label: 'New Prescription', color: 'warning' },
    { icon: 'fa-file-invoice-dollar', label: 'New Bill', color: 'info' },
  ];

  return (
    <>
      <button className={`fab ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        <i className="fa-solid fa-plus"></i>
      </button>

      <div className={`quick-actions ${isOpen ? 'active' : ''}`}>
        {actions.map((action, index) => (
          <a href="#!" className="quick-action-item" key={index}>
            <i className={`fa-solid ${action.icon}`}></i>
            <span>{action.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default QuickActions;
