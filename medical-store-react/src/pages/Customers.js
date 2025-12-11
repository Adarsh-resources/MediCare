import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    { id: 'C001', name: 'Rahul Sharma', phone: '+91 98765 43210', email: 'rahul@email.com', visits: 12, totalSpent: '₹15,400', lastVisit: '2025-12-10' },
    { id: 'C002', name: 'Priya Patel', phone: '+91 87654 32109', email: 'priya@email.com', visits: 8, totalSpent: '₹9,200', lastVisit: '2025-12-09' },
    { id: 'C003', name: 'Amit Kumar', phone: '+91 76543 21098', email: 'amit@email.com', visits: 15, totalSpent: '₹22,100', lastVisit: '2025-12-08' },
    { id: 'C004', name: 'Sneha Gupta', phone: '+91 65432 10987', email: 'sneha@email.com', visits: 6, totalSpent: '₹7,800', lastVisit: '2025-12-07' },
    { id: 'C005', name: 'Vikram Singh', phone: '+91 54321 09876', email: 'vikram@email.com', visits: 20, totalSpent: '₹35,600', lastVisit: '2025-12-06' },
  ];

  const columns = [
    { header: 'Customer ID', accessor: 'id' },
    { 
      header: 'Name', 
      accessor: 'name',
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
    { header: 'Phone', accessor: 'phone' },
    { header: 'Email', accessor: 'email' },
    { header: 'Visits', accessor: 'visits' },
    { header: 'Total Spent', accessor: 'totalSpent' },
    { header: 'Last Visit', accessor: 'lastVisit' },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-edit"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-customers">
      <div className="page-header">
        <h1 className="page-title">Customers Management</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add Customer
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DataTable columns={columns} data={customers} />

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

export default Customers;
