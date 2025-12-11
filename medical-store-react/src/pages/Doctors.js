import React, { useState } from 'react';
import Card from '../components/Common/Card';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('all');

  const doctors = [
    { id: 'D001', name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', phone: '+91 98765 43210', experience: '15 years', status: 'available', schedule: '9:00 AM - 5:00 PM' },
    { id: 'D002', name: 'Dr. Priya Sharma', specialty: 'Pediatrics', phone: '+91 87654 32109', experience: '10 years', status: 'busy', schedule: '10:00 AM - 6:00 PM' },
    { id: 'D003', name: 'Dr. Amit Patel', specialty: 'Orthopedics', phone: '+91 76543 21098', experience: '12 years', status: 'available', schedule: '8:00 AM - 4:00 PM' },
    { id: 'D004', name: 'Dr. Sneha Gupta', specialty: 'Dermatology', phone: '+91 65432 10987', experience: '8 years', status: 'available', schedule: '11:00 AM - 7:00 PM' },
    { id: 'D005', name: 'Dr. Vikram Singh', specialty: 'Neurology', phone: '+91 54321 09876', experience: '20 years', status: 'busy', schedule: '9:00 AM - 5:00 PM' },
    { id: 'D006', name: 'Dr. Anita Desai', specialty: 'Gynecology', phone: '+91 43210 98765', experience: '14 years', status: 'available', schedule: '10:00 AM - 6:00 PM' },
  ];

  return (
    <div className="page-doctors">
      <div className="page-header">
        <h1 className="page-title">Doctors Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add New Doctor
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              className="form-control" 
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="cardiology">Cardiology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="dermatology">Dermatology</option>
              <option value="neurology">Neurology</option>
            </select>
          </div>
        </div>
      </Card>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img 
              src={`https://ui-avatars.com/api/?name=${doctor.name.replace('Dr. ', '').replace(' ', '+')}&background=f59e0b&color=fff&size=80`} 
              alt={doctor.name} 
            />
            <div className="doctor-info">
              <h4>{doctor.name}</h4>
              <p>{doctor.specialty}</p>
              <span className={`status ${doctor.status}`}>{doctor.status}</span>
            </div>
            <div className="doctor-schedule">
              <i className="fa-solid fa-clock"></i> {doctor.schedule}
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button className="btn btn-sm btn-primary">View Profile</button>
              <button className="btn btn-sm btn-success">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
