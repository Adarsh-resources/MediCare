import React from 'react';
import Card from '../components/Common/Card';

const Rooms = () => {
  const roomCategories = [
    { type: 'General Ward', total: 50, occupied: 38, available: 12, color: '#6366f1' },
    { type: 'Semi-Private', total: 30, occupied: 24, available: 6, color: '#10b981' },
    { type: 'Private Room', total: 20, occupied: 15, available: 5, color: '#f59e0b' },
    { type: 'ICU', total: 15, occupied: 12, available: 3, color: '#ef4444' },
    { type: 'NICU', total: 10, occupied: 7, available: 3, color: '#8b5cf6' },
    { type: 'Operation Theatre', total: 5, occupied: 2, available: 3, color: '#ec4899' },
  ];

  const recentAdmissions = [
    { patient: 'Rahul Sharma', room: '101', type: 'Private Room', admitDate: '2025-12-08', doctor: 'Dr. Kumar' },
    { patient: 'Priya Patel', room: 'ICU-05', type: 'ICU', admitDate: '2025-12-09', doctor: 'Dr. Sharma' },
    { patient: 'Amit Kumar', room: '205', type: 'Semi-Private', admitDate: '2025-12-10', doctor: 'Dr. Patel' },
    { patient: 'Sneha Gupta', room: 'GW-12', type: 'General Ward', admitDate: '2025-12-10', doctor: 'Dr. Gupta' },
  ];

  return (
    <div className="page-rooms">
      <div className="page-header">
        <h1 className="page-title">Rooms & Beds Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Admit Patient
        </button>
      </div>

      {/* Room Stats Cards */}
      <div className="room-stats-grid">
        {roomCategories.map((room, index) => (
          <div className="room-stat-card" key={index}>
            <div className="room-type-header" style={{ borderLeftColor: room.color }}>
              <h4>{room.type}</h4>
              <span className="total-beds">{room.total} Beds</span>
            </div>
            <div className="bed-progress">
              <div 
                className="progress-bar" 
                style={{ 
                  width: `${(room.occupied / room.total) * 100}%`,
                  background: `linear-gradient(135deg, ${room.color}, ${room.color}99)`
                }}
              ></div>
            </div>
            <div className="room-numbers">
              <div className="occupied">
                <span className="number">{room.occupied}</span>
                <span className="label">Occupied</span>
              </div>
              <div className="available">
                <span className="number" style={{ color: room.color }}>{room.available}</span>
                <span className="label">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bed Summary */}
      <div className="dashboard-grid">
        <Card title="Bed Summary" icon="fa-bed" className="chart-card">
          <div className="bed-summary-large">
            <div className="summary-item">
              <div className="summary-icon blue">
                <i className="fa-solid fa-bed"></i>
              </div>
              <div className="summary-details">
                <span className="value">130</span>
                <span className="label">Total Beds</span>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon red">
                <i className="fa-solid fa-bed-pulse"></i>
              </div>
              <div className="summary-details">
                <span className="value">98</span>
                <span className="label">Occupied</span>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon green">
                <i className="fa-solid fa-check-circle"></i>
              </div>
              <div className="summary-details">
                <span className="value">32</span>
                <span className="label">Available</span>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon orange">
                <i className="fa-solid fa-tools"></i>
              </div>
              <div className="summary-details">
                <span className="value">5</span>
                <span className="label">Under Maintenance</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Recent Admissions" icon="fa-user-plus">
          <div className="admission-list">
            {recentAdmissions.map((admission, index) => (
              <div className="admission-item" key={index}>
                <div className="admission-info">
                  <h4>{admission.patient}</h4>
                  <p><i className="fa-solid fa-door-open"></i> Room {admission.room} ({admission.type})</p>
                  <p><i className="fa-solid fa-user-doctor"></i> {admission.doctor}</p>
                </div>
                <div className="admission-date">
                  <i className="fa-solid fa-calendar"></i> {admission.admitDate}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Rooms;
