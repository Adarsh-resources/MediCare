import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const suppliers = [
    { id: 'SUP001', name: 'Sun Pharma', contact: 'Rajesh Mehta', phone: '+91 98765 43210', email: 'contact@sunpharma.com', products: 45, status: 'Active' },
    { id: 'SUP002', name: 'Cipla Ltd', contact: 'Priya Shah', phone: '+91 87654 32109', email: 'contact@cipla.com', products: 38, status: 'Active' },
    { id: 'SUP003', name: 'Dr. Reddy Labs', contact: 'Amit Reddy', phone: '+91 76543 21098', email: 'contact@drreddy.com', products: 52, status: 'Active' },
    { id: 'SUP004', name: 'Mankind Pharma', contact: 'Sneha Agarwal', phone: '+91 65432 10987', email: 'contact@mankind.com', products: 30, status: 'Inactive' },
    { id: 'SUP005', name: 'Zydus Healthcare', contact: 'Vikram Zydus', phone: '+91 54321 09876', email: 'contact@zydus.com', products: 42, status: 'Active' },
  ];

  const columns = [
    { header: 'Supplier ID', accessor: 'id' },
    { header: 'Company Name', accessor: 'name' },
    { header: 'Contact Person', accessor: 'contact' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Email', accessor: 'email' },
    { header: 'Products', accessor: 'products' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className={`status ${value.toLowerCase() === 'active' ? 'completed' : 'cancelled'}`}>{value}</span>
      )
    },
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
    <div className="page-suppliers">
      <div className="page-header">
        <h1 className="page-title">Suppliers Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add Supplier
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DataTable columns={columns} data={suppliers} />

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

export default Suppliers;
