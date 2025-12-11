import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prescriptions = [
    { id: 'RX001', patient: 'Rahul Sharma', doctor: 'Dr. Rajesh Kumar', date: '2025-12-10', medicines: 4, status: 'Dispensed' },
    { id: 'RX002', patient: 'Priya Patel', doctor: 'Dr. Priya Sharma', date: '2025-12-10', medicines: 3, status: 'Pending' },
    { id: 'RX003', patient: 'Amit Kumar', doctor: 'Dr. Amit Patel', date: '2025-12-09', medicines: 5, status: 'Dispensed' },
    { id: 'RX004', patient: 'Sneha Gupta', doctor: 'Dr. Sneha Gupta', date: '2025-12-09', medicines: 2, status: 'Processing' },
    { id: 'RX005', patient: 'Vikram Singh', doctor: 'Dr. Vikram Singh', date: '2025-12-08', medicines: 6, status: 'Dispensed' },
  ];

  const columns = [
    { header: 'Prescription ID', accessor: 'id' },
    { 
      header: 'Patient', 
      accessor: 'patient',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={`https://ui-avatars.com/api/?name=${value.replace(' ', '+')}&background=6366f1&color=fff&size=32`} 
            alt={value}
            style={{ borderRadius: '50%' }}
          />
          {value}
        </div>
      )
    },
    { header: 'Doctor', accessor: 'doctor' },
    { header: 'Date', accessor: 'date' },
    { header: 'Medicines', accessor: 'medicines' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => {
        const statusClass = value === 'Dispensed' ? 'completed' : value === 'Pending' ? 'pending' : 'inprogress';
        return <span className={`status ${statusClass}`}>{value}</span>;
      }
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-pills"></i></button>
          <button className="btn btn-sm btn-danger"><i className="fa-solid fa-print"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-prescriptions">
      <div className="page-header">
        <h1 className="page-title">Prescriptions</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> New Prescription
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search prescriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DataTable columns={columns} data={prescriptions} />

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

export default Prescriptions;
