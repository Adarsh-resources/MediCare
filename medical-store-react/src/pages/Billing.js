import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const bills = [
    { id: 'B001', patient: 'Rahul Sharma', type: 'OPD', services: 'Consultation + Tests', amount: '₹2,500', date: '2025-12-10', status: 'Paid' },
    { id: 'B002', patient: 'Priya Patel', type: 'IPD', services: 'Room + Surgery', amount: '₹45,000', date: '2025-12-10', status: 'Partial' },
    { id: 'B003', patient: 'Amit Kumar', type: 'Emergency', services: 'Emergency Care', amount: '₹8,500', date: '2025-12-09', status: 'Pending' },
    { id: 'B004', patient: 'Sneha Gupta', type: 'Pharmacy', services: 'Medicines', amount: '₹1,200', date: '2025-12-09', status: 'Paid' },
    { id: 'B005', patient: 'Vikram Singh', type: 'IPD', services: 'Room + Treatment', amount: '₹32,000', date: '2025-12-08', status: 'Paid' },
  ];

  const columns = [
    { header: 'Bill ID', accessor: 'id' },
    { header: 'Patient', accessor: 'patient' },
    { 
      header: 'Type', 
      accessor: 'type',
      render: (value) => (
        <span className={`patient-type ${value.toLowerCase()}`}>{value}</span>
      )
    },
    { header: 'Services', accessor: 'services' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Date', accessor: 'date' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => {
        const statusClass = value === 'Paid' ? 'completed' : value === 'Partial' ? 'pending' : 'cancelled';
        return <span className={`status ${statusClass}`}>{value}</span>;
      }
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-print"></i></button>
          <button className="btn btn-sm btn-danger"><i className="fa-solid fa-paper-plane"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-billing">
      <div className="page-header">
        <h1 className="page-title">Billing Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Create Bill
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search bills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DataTable columns={columns} data={bills} />

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

export default Billing;
