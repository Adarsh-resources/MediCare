import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const patients = [
    { id: 'P001', name: 'Rahul Sharma', age: 32, gender: 'Male', phone: '+91 98765 43210', type: 'OPD', status: 'Active', lastVisit: '2025-12-08' },
    { id: 'P002', name: 'Priya Patel', age: 28, gender: 'Female', phone: '+91 87654 32109', type: 'IPD', status: 'Admitted', lastVisit: '2025-12-10' },
    { id: 'P003', name: 'Amit Kumar', age: 45, gender: 'Male', phone: '+91 76543 21098', type: 'Emergency', status: 'Critical', lastVisit: '2025-12-10' },
    { id: 'P004', name: 'Sneha Gupta', age: 35, gender: 'Female', phone: '+91 65432 10987', type: 'OPD', status: 'Active', lastVisit: '2025-12-07' },
    { id: 'P005', name: 'Vikram Singh', age: 52, gender: 'Male', phone: '+91 54321 09876', type: 'IPD', status: 'Recovering', lastVisit: '2025-12-09' },
  ];

  const columns = [
    { header: 'Patient ID', accessor: 'id' },
    { 
      header: 'Name', 
      accessor: 'name',
      render: (value, row) => (
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
    { header: 'Age', accessor: 'age' },
    { header: 'Gender', accessor: 'gender' },
    { header: 'Phone', accessor: 'phone' },
    { 
      header: 'Type', 
      accessor: 'type',
      render: (value) => (
        <span className={`patient-type ${value.toLowerCase()}`}>{value}</span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className={`status ${value.toLowerCase()}`}>{value}</span>
      )
    },
    { header: 'Last Visit', accessor: 'lastVisit' },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-edit"></i></button>
          <button className="btn btn-sm btn-danger"><i className="fa-solid fa-trash"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-patients">
      <div className="page-header">
        <h1 className="page-title">Patients Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add New Patient
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              className="form-control" 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="opd">OPD</option>
              <option value="ipd">IPD</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
        </div>

        <DataTable columns={columns} data={patients} />

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

export default Patients;
