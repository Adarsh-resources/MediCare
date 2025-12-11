import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  const hospitalMenuItems = [
    { path: '/', icon: 'fa-grid-2', label: 'Dashboard' },
    { path: '/patients', icon: 'fa-hospital-user', label: 'Patients' },
    { path: '/doctors', icon: 'fa-user-doctor', label: 'Doctors' },
    { path: '/appointments', icon: 'fa-calendar-check', label: 'Appointments' },
    { path: '/departments', icon: 'fa-building', label: 'Departments' },
    { path: '/rooms', icon: 'fa-bed', label: 'Rooms & Beds' },
  ];

  const pharmacyMenuItems = [
    { path: '/medicines', icon: 'fa-pills', label: 'Medicines' },
    { path: '/sales', icon: 'fa-cart-shopping', label: 'Sales' },
    { path: '/purchase', icon: 'fa-truck', label: 'Purchase' },
    { path: '/prescriptions', icon: 'fa-prescription', label: 'Prescriptions' },
    { path: '/billing', icon: 'fa-file-invoice-dollar', label: 'Billing' },
  ];

  const managementMenuItems = [
    { path: '/customers', icon: 'fa-users', label: 'Customers' },
    { path: '/suppliers', icon: 'fa-truck-field', label: 'Suppliers' },
    { path: '/reports', icon: 'fa-chart-pie', label: 'Reports' },
    { path: '/settings', icon: 'fa-gear', label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <i className="fa-solid fa-hospital"></i>
          </div>
          <div className="logo-text">
            <span className="logo-name">MediCare</span>
            <span className="logo-tagline">Hospital & Pharmacy</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {/* Hospital Section */}
        <div className="nav-section">
          <span className="nav-section-title">Hospital</span>
          <ul className="nav-menu">
            {hospitalMenuItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Pharmacy Section */}
        <div className="nav-section">
          <span className="nav-section-title">Pharmacy</span>
          <ul className="nav-menu">
            {pharmacyMenuItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Management Section */}
        <div className="nav-section">
          <span className="nav-section-title">Management</span>
          <ul className="nav-menu">
            {managementMenuItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
