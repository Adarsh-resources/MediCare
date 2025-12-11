import React from 'react';

const StatCard = ({ icon, iconClass, title, value, subtitle, trend, trendValue }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${iconClass}`}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-number">{value}</p>
        {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        {trend && (
          <span className={`stat-trend ${trend}`}>
            <i className={`fa-solid fa-arrow-${trend === 'up' ? 'up' : 'down'}`}></i>
            {trendValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
