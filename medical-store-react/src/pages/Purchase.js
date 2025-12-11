import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Purchase = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const purchases = [
    { id: 'PO001', supplier: 'Sun Pharma', items: 25, total: '₹45,000', date: '2025-12-08', status: 'Received', invoice: 'INV-2025-001' },
    { id: 'PO002', supplier: 'Cipla Ltd', items: 18, total: '₹32,500', date: '2025-12-07', status: 'Pending', invoice: 'INV-2025-002' },
    { id: 'PO003', supplier: 'Dr. Reddy Labs', items: 30, total: '₹67,800', date: '2025-12-06', status: 'Received', invoice: 'INV-2025-003' },
    { id: 'PO004', supplier: 'Mankind Pharma', items: 12, total: '₹18,200', date: '2025-12-05', status: 'In Transit', invoice: 'INV-2025-004' },
    { id: 'PO005', supplier: 'Zydus Healthcare', items: 22, total: '₹41,500', date: '2025-12-04', status: 'Received', invoice: 'INV-2025-005' },
  ];
//changes done
  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { header: 'Supplier', accessor: 'supplier' },
    { header: 'Items', accessor: 'items' },
    { header: 'Total Amount', accessor: 'total' },
    { header: 'Date', accessor: 'date' },
    { header: 'Invoice', accessor: 'invoice' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => {
        const statusClass = value === 'Received' ? 'completed' : value === 'Pending' ? 'pending' : 'inprogress';
        return <span className={`status ${statusClass}`}>{value}</span>;
      }
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-sm btn-primary"><i className="fa-solid fa-eye"></i></button>
          <button className="btn btn-sm btn-success"><i className="fa-solid fa-check"></i></button>
        </div>
      )
    }
  ];

  return (
    <div className="page-purchase">
      <div className="page-header">
        <h1 className="page-title">Purchase Orders</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> New Purchase Order
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search purchase orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DataTable columns={columns} data={purchases} />

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

export default Purchase;
