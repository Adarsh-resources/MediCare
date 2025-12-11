import React from 'react';

const Card = ({ title, icon, children, actions, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h2>
          {icon && <i className={`fa-solid ${icon}`}></i>}
          {title}
        </h2>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
