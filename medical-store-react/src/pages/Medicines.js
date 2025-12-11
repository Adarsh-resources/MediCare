import React, { useState } from 'react';
import Card from '../components/Common/Card';
import DataTable from '../components/Common/DataTable';

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const medicines = [
    { id: 'M001', name: 'Paracetamol 500mg', category: 'Tablet', manufacturer: 'Sun Pharma', stock: 450, price: '₹25', expiry: '2026-06-15', status: 'In Stock' },
    { id: 'M002', name: 'Amoxicillin 250mg', category: 'Capsule', manufacturer: 'Cipla', stock: 23, price: '₹45', expiry: '2025-12-20', status: 'Low Stock' },
    { id: 'M003', name: 'Omeprazole 20mg', category: 'Capsule', manufacturer: 'Dr. Reddy', stock: 180, price: '₹35', expiry: '2026-03-10', status: 'In Stock' },
    { id: 'M004', name: 'Cetirizine 10mg', category: 'Tablet', manufacturer: 'Mankind', stock: 320, price: '₹15', expiry: '2026-08-22', status: 'In Stock' },
    { id: 'M005', name: 'Metformin 500mg', category: 'Tablet', manufacturer: 'USV', stock: 15, price: '₹28', expiry: '2025-11-30', status: 'Critical' },
    { id: 'M006', name: 'Azithromycin 500mg', category: 'Tablet', manufacturer: 'Zydus', stock: 95, price: '₹85', expiry: '2026-01-15', status: 'In Stock' },
  ];

  const columns = [
    { header: 'Medicine ID', accessor: 'id' },
    { header: 'Medicine Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Manufacturer', accessor: 'manufacturer' },
    { header: 'Stock', accessor: 'stock' },
    { header: 'Price', accessor: 'price' },
    { header: 'Expiry Date', accessor: 'expiry' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => {
        const statusClass = value === 'In Stock' ? 'completed' : value === 'Low Stock' ? 'pending' : 'cancelled';
        return <span className={`status ${statusClass}`}>{value}</span>;
      }
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
    <div className="page-medicines">
      <div className="page-header">
        <h1 className="page-title">Medicines Inventory</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add Medicine
        </button>
      </div>

      <Card>
        <div className="filter-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              className="form-control" 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="tablet">Tablets</option>
              <option value="capsule">Capsules</option>
              <option value="syrup">Syrups</option>
              <option value="injection">Injections</option>
            </select>
          </div>
        </div>

        <DataTable columns={columns} data={medicines} />

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

export default Medicines;
