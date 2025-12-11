import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import Card from '../components/Common/Card';
import StatCard from '../components/Common/StatCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Reports = () => {
  const stats = [
    { icon: 'fa-indian-rupee-sign', iconClass: 'blue', title: 'Total Revenue', value: '₹12,45,680', subtitle: 'This Month' },
    { icon: 'fa-hospital-user', iconClass: 'green', title: 'Total Patients', value: '3,248', subtitle: 'This Month' },
    { icon: 'fa-pills', iconClass: 'orange', title: 'Medicines Sold', value: '8,456', subtitle: 'This Month' },
    { icon: 'fa-calendar-check', iconClass: 'purple', title: 'Appointments', value: '1,892', subtitle: 'This Month' },
  ];

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [85000, 92000, 78000, 105000, 98000, 115000, 125000, 118000, 132000, 145000, 138000, 155000],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const departmentData = {
    labels: ['OPD', 'IPD', 'Emergency', 'Surgery', 'Pharmacy', 'Lab'],
    datasets: [
      {
        data: [28, 22, 12, 15, 18, 5],
        backgroundColor: ['#6366f1', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#06b6d4'],
        borderWidth: 0,
      },
    ],
  };

  const monthlyPatientsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'OPD',
        data: [450, 520, 480, 560, 620, 580, 650, 700, 680, 750, 720, 800],
        backgroundColor: '#6366f1',
      },
      {
        label: 'IPD',
        data: [120, 150, 130, 180, 160, 200, 190, 220, 210, 250, 230, 280],
        backgroundColor: '#10b981',
      },
      {
        label: 'Emergency',
        data: [80, 95, 70, 110, 100, 85, 120, 105, 130, 115, 140, 125],
        backgroundColor: '#ef4444',
      },
    ],
  };

  return (
    <div className="page-reports">
      <div className="page-header">
        <h1 className="page-title">Reports & Analytics</h1>
        <button className="btn btn-primary">
          <i className="fa-solid fa-download"></i> Export Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="dashboard-grid">
        <Card title="Revenue Trend" icon="fa-chart-line" className="chart-card">
          <Line 
            data={revenueData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              plugins: { legend: { display: false } }
            }} 
          />
        </Card>

        <Card title="Revenue by Department" icon="fa-chart-pie">
          <Doughnut 
            data={departmentData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              plugins: { legend: { position: 'bottom' } }
            }} 
          />
        </Card>
      </div>

      <div className="dashboard-grid">
        <Card title="Monthly Patient Statistics" icon="fa-chart-bar" className="chart-card">
          <Bar 
            data={monthlyPatientsData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              plugins: { legend: { position: 'top' } }
            }} 
          />
        </Card>
      </div>
    </div>
  );
};

export default Reports;
