import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import Departments from './pages/Departments';
import Rooms from './pages/Rooms';
import Medicines from './pages/Medicines';
import Sales from './pages/Sales';
import Purchase from './pages/Purchase';
import Prescriptions from './pages/Prescriptions';
import Billing from './pages/Billing';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import QuickActions from './components/Common/QuickActions';
import './styles/main.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (darkMode) {
      root.classList.add('dark-mode');
      body.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Sidebar collapsed={sidebarCollapsed} />
        <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
          <Header onToggleSidebar={toggleSidebar} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />} />
            </Routes>
          </div>
        </main>
        <QuickActions isOpen={quickActionsOpen} onToggle={() => setQuickActionsOpen(!quickActionsOpen)} />
      </div>
    </Router>
  );
}

export default App;
