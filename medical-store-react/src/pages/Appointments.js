import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const appointments = [
    { id: 'A001', patient: 'Rahul Sharma', doctor: 'Dr. Rajesh Kumar', department: 'Cardiology', date: '2025-12-10', time: '09:00 AM', status: 'upcoming', type: 'Consultation' },
    { id: 'A002', patient: 'Priya Patel', doctor: 'Dr. Priya Sharma', department: 'Pediatrics', date: '2025-12-10', time: '09:30 AM', status: 'inprogress', type: 'Follow-up' },
    { id: 'A003', patient: 'Amit Kumar', doctor: 'Dr. Amit Patel', department: 'Orthopedics', date: '2025-12-10', time: '10:00 AM', status: 'completed', type: 'Check-up' },
    { id: 'A004', patient: 'Sneha Gupta', doctor: 'Dr. Sneha Gupta', department: 'Dermatology', date: '2025-12-10', time: '10:30 AM', status: 'upcoming', type: 'Consultation' },
    { id: 'A005', patient: 'Vikram Singh', doctor: 'Dr. Vikram Singh', department: 'Neurology', date: '2025-12-10', time: '11:00 AM', status: 'cancelled', type: 'Follow-up' },
  ];

  const columns = [
    { header: 'Appointment ID', accessor: 'id' },
    { header: 'Patient', accessor: 'patient' },
    { header: 'Doctor', accessor: 'doctor' },
    { header: 'Department', accessor: 'department' },
    { header: 'Date', accessor: 'date' },
    { header: 'Time', accessor: 'time' },
    { header: 'Type', accessor: 'type' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className={`status ${value}`}>{value}</span>
      )
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (value, row) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-check"></i></button>
          <button className="btn btn-sm btn-danger"><i className="fa-solid fa-times"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-appointments">
      <div className="page-header">
        <h1 className="page-title">Appointments Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Book New Appointment
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <input 
              type="date" 
              className="form-control"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <select 
              className="form-control" 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <DataTable columns={columns} data={appointments} />

        <div className="pagination">
          <button><i className="fa-solid fa-chevron-left"></i></button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </Card>
    </div>
  );
};

export default Appointments;
