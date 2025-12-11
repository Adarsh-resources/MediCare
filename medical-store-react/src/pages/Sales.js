import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const sales = [
    { id: 'S001', customer: 'Rahul Sharma', items: 5, total: '₹450', date: '2025-12-10', time: '10:30 AM', payment: 'Cash', status: 'Completed' },
    { id: 'S002', customer: 'Priya Patel', items: 3, total: '₹280', date: '2025-12-10', time: '11:15 AM', payment: 'UPI', status: 'Completed' },
    { id: 'S003', customer: 'Amit Kumar', items: 8, total: '₹1,250', date: '2025-12-10', time: '12:00 PM', payment: 'Card', status: 'Completed' },
    { id: 'S004', customer: 'Sneha Gupta', items: 2, total: '₹180', date: '2025-12-10', time: '02:30 PM', payment: 'Cash', status: 'Pending' },
    { id: 'S005', customer: 'Vikram Singh', items: 6, total: '₹890', date: '2025-12-10', time: '03:45 PM', payment: 'UPI', status: 'Completed' },
  ];

  const columns = [
    { header: 'Invoice ID', accessor: 'id' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Items', accessor: 'items' },
    { header: 'Total', accessor: 'total' },
    { header: 'Date', accessor: 'date' },
    { header: 'Time', accessor: 'time' },
    { header: 'Payment', accessor: 'payment' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className={`status ${value.toLowerCase()}`}>{value}</span>
      )
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-print"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-sales">
      <div className="page-header">
        <h1 className="page-title">Sales Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> New Sale
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search sales..."
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
          </div>
        </div>

        <DataTable columns={columns} data={sales} />

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

export default Sales;
