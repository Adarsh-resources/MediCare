import React from 'react';

const Departments = () => {
  const departments = [
    { id: 1, name: 'Cardiology', icon: 'fa-heart-pulse', doctors: 5, patients: 124, head: 'Dr. Rajesh Kumar', color: '#ef4444' },
    { id: 2, name: 'Pediatrics', icon: 'fa-baby', doctors: 4, patients: 98, head: 'Dr. Priya Sharma', color: '#f59e0b' },
    { id: 3, name: 'Orthopedics', icon: 'fa-bone', doctors: 3, patients: 76, head: 'Dr. Amit Patel', color: '#10b981' },
    { id: 4, name: 'Dermatology', icon: 'fa-hand-dots', doctors: 2, patients: 54, head: 'Dr. Sneha Gupta', color: '#6366f1' },
    { id: 5, name: 'Neurology', icon: 'fa-brain', doctors: 4, patients: 89, head: 'Dr. Vikram Singh', color: '#8b5cf6' },
    { id: 6, name: 'Gynecology', icon: 'fa-venus', doctors: 3, patients: 112, head: 'Dr. Anita Desai', color: '#ec4899' },
    { id: 7, name: 'Ophthalmology', icon: 'fa-eye', doctors: 2, patients: 45, head: 'Dr. Suresh Reddy', color: '#06b6d4' },
    { id: 8, name: 'ENT', icon: 'fa-ear-listen', doctors: 2, patients: 38, head: 'Dr. Meera Joshi', color: '#84cc16' },
  ];

  return (
    <div className="page-departments">
      <div className="page-header">
        <h1 className="page-title">Departments</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add Department
        </button>
      </div>

      <div className="departments-grid">
        {departments.map((dept) => (
          <div className="department-card" key={dept.id}>
            <div className="dept-icon-large" style={{ background: `linear-gradient(135deg, ${dept.color}, ${dept.color}99)` }}>
              <i className={`fa-solid ${dept.icon}`}></i>
            </div>
            <div className="dept-content">
              <h3>{dept.name}</h3>
              <p className="dept-head"><i className="fa-solid fa-user-doctor"></i> {dept.head}</p>
              <div className="dept-stats">
                <div className="dept-stat">
                  <span className="stat-value">{dept.doctors}</span>
                  <span className="stat-label">Doctors</span>
                </div>
                <div className="dept-stat">
                  <span className="stat-value">{dept.patients}</span>
                  <span className="stat-label">Patients</span>
                </div>
              </div>
              <button className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '15px' }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
