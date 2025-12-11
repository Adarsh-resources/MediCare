import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import StatCard from '../components/Common/StatCard';
import Card from '../components/Common/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const stats = [
    { icon: 'fa-hospital-user', iconClass: 'blue', title: 'Total Patients', value: '1,248', subtitle: '+12 today' },
    { icon: 'fa-user-doctor', iconClass: 'green', title: 'Doctors Available', value: '24', subtitle: '8 on duty' },
    { icon: 'fa-calendar-check', iconClass: 'orange', title: "Today's Appointments", value: '56', subtitle: '12 pending' },
    { icon: 'fa-pills', iconClass: 'red', title: 'Medicines in Stock', value: '3,456', subtitle: '23 low stock' },
    { icon: 'fa-indian-rupee-sign', iconClass: 'purple', title: "Today's Revenue", value: '₹45,680', subtitle: '+8% from yesterday' },
  ];

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 35000, 32000, 45000, 42000, 48000, 52000],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const departmentData = {
    labels: ['OPD', 'IPD', 'Emergency', 'Surgery', 'Pharmacy'],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
        borderWidth: 0,
      },
    ],
  };

  const appointments = [
    { time: '09:00 AM', patient: 'John Doe', doctor: 'Dr. Smith', status: 'upcoming' },
    { time: '09:30 AM', patient: 'Jane Smith', doctor: 'Dr. Johnson', status: 'inprogress' },
    { time: '10:00 AM', patient: 'Mike Wilson', doctor: 'Dr. Brown', status: 'completed' },
    { time: '10:30 AM', patient: 'Sarah Davis', doctor: 'Dr. Wilson', status: 'upcoming' },
  ];

  const recentPatients = [
    { name: 'Rahul Sharma', age: 32, type: 'opd', condition: 'Fever & Cold' },
    { name: 'Priya Patel', age: 28, type: 'ipd', condition: 'Post Surgery' },
    { name: 'Amit Kumar', age: 45, type: 'emergency', condition: 'Chest Pain' },
    { name: 'Sneha Gupta', age: 35, type: 'opd', condition: 'Regular Checkup' },
  ];

  const lowStockMedicines = [
    { name: 'Paracetamol 500mg', stock: 45, minStock: 100 },
    { name: 'Amoxicillin 250mg', stock: 23, minStock: 50 },
    { name: 'Omeprazole 20mg', stock: 18, minStock: 40 },
    { name: 'Metformin 500mg', stock: 32, minStock: 60 },
  ];

  return (
    <div className="dashboard">
      {/* Quick Action Cards */}
      <div className="quick-action-cards">
        <div className="quick-card">
          <i className="fa-solid fa-user-plus"></i>
          <span>New Patient</span>
        </div>
        <div className="quick-card">
          <i className="fa-solid fa-calendar-plus"></i>
          <span>Book Appointment</span>
        </div>
        <div className="quick-card">
          <i className="fa-solid fa-prescription"></i>
          <span>New Prescription</span>
        </div>
        <div className="quick-card">
          <i className="fa-solid fa-file-invoice-dollar"></i>
          <span>Generate Bill</span>
        </div>
        <div className="quick-card emergency">
          <i className="fa-solid fa-truck-medical"></i>
          <span>Emergency</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid stats-grid-5">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="dashboard-grid">
        <Card title="Revenue Overview" icon="fa-chart-line" className="chart-card">
          <Line 
            data={revenueData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              plugins: { legend: { display: false } }
            }} 
          />
        </Card>

        <Card title="Department Distribution" icon="fa-chart-pie">
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

      {/* Content Grid */}
      <div className="dashboard-grid dashboard-grid-3">
        {/* Today's Appointments */}
        <Card title="Today's Appointments" icon="fa-calendar-check">
          <div className="appointment-list">
            {appointments.map((apt, index) => (
              <div className="appointment-item" key={index}>
                <div className="appointment-time">
                  <span className="time">{apt.time}</span>
                  <span className={`status ${apt.status}`}>{apt.status}</span>
                </div>
                <div className="appointment-info">
                  <h4>{apt.patient}</h4>
                  <p><i className="fa-solid fa-user-doctor"></i> {apt.doctor}</p>
                </div>
                <div className="appointment-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Patients */}
        <Card title="Recent Patients" icon="fa-hospital-user">
          <div className="patient-list">
            {recentPatients.map((patient, index) => (
              <div className="patient-item" key={index}>
                <img 
                  src={`https://ui-avatars.com/api/?name=${patient.name.replace(' ', '+')}&background=6366f1&color=fff`} 
                  alt={patient.name} 
                />
                <div className="patient-info">
                  <h4>{patient.name}</h4>
                  <p>Age: {patient.age} | {patient.condition}</p>
                </div>
                <span className={`patient-type ${patient.type}`}>{patient.type.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Low Stock Alerts */}
        <Card title="Low Stock Medicines" icon="fa-exclamation-triangle">
          <div className="stock-list">
            {lowStockMedicines.map((medicine, index) => (
              <div className="stock-item" key={index}>
                <div className="stock-info">
                  <h4>{medicine.name}</h4>
                  <p>Min Stock: {medicine.minStock}</p>
                </div>
                <span className="stock-status critical">{medicine.stock} left</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
