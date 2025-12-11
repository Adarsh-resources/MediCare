import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = ({ darkMode, onToggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [settings, setSettings] = useState({
    hospitalName: 'MediCare Hospital & Pharmacy',
    email: 'info@medicare.com',
    phone: '+91 98765 43210',
    address: '123 Healthcare Avenue, Medical City, India',
    currency: 'INR',
    timezone: 'Asia/Kolkata',
    language: 'en',
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    soundEnabled: true,
    autoBackup: true,
  });

  // Apply theme to whole app
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme", "dark-mode");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme", "dark-mode");
    }
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: 'fa-gear' },
    { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
    { id: 'security', label: 'Security', icon: 'fa-shield-halved' },
    { id: 'backup', label: 'Backup', icon: 'fa-cloud-arrow-up' },
  ];

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <div className="settings-header-content">
          <div className="settings-title-section">
            <div className="settings-icon-wrapper">
              <i className="fa-solid fa-sliders"></i>
            </div>
            <div>
              <h1 className="settings-main-title">Settings</h1>
              <p className="settings-subtitle">Manage your preferences and configurations</p>
            </div>
          </div>
          <button className={`save-btn ${saveSuccess ? 'success' : ''}`} onClick={handleSave}>
            <i className={`fa-solid ${saveSuccess ? 'fa-check' : 'fa-save'}`}></i>
            {saveSuccess ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="settings-layout">
        {/* Sidebar Navigation */}
        <div className="settings-sidebar">
          <nav className="settings-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`settings-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`}></i>
                <span>{tab.label}</span>
                {activeTab === tab.id && <div className="nav-indicator"></div>}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="settings-content">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="settings-section animate-in">
              <div className="section-header">
                <h2><i className="fa-solid fa-building"></i> Organization Details</h2>
                <p>Configure your hospital and pharmacy information</p>
              </div>
              
              <div className="settings-card">
                <div className="form-row">
                  <div className="form-group">
                    <label><i className="fa-solid fa-hospital"></i> Organization Name</label>
                    <input
                      type="text"
                      className="form-input"
                      name="hospitalName"
                      value={settings.hospitalName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><i className="fa-solid fa-envelope"></i> Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      name="email"
                      value={settings.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label><i className="fa-solid fa-phone"></i> Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      name="phone"
                      value={settings.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><i className="fa-solid fa-language"></i> Language</label>
                    <select
                      className="form-input"
                      name="language"
                      value={settings.language}
                      onChange={handleChange}
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label><i className="fa-solid fa-location-dot"></i> Address</label>
                  <textarea
                    className="form-input"
                    name="address"
                    value={settings.address}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="section-header">
                <h2><i className="fa-solid fa-globe"></i> Regional Settings</h2>
                <p>Configure currency and timezone preferences</p>
              </div>
              
              <div className="settings-card">
                <div className="form-row">
                  <div className="form-group">
                    <label><i className="fa-solid fa-indian-rupee-sign"></i> Currency</label>
                    <select
                      className="form-input"
                      name="currency"
                      value={settings.currency}
                      onChange={handleChange}
                    >
                      <option value="INR">₹ Indian Rupee (INR)</option>
                      <option value="USD">$ US Dollar (USD)</option>
                      <option value="EUR">€ Euro (EUR)</option>
                      <option value="GBP">£ British Pound (GBP)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label><i className="fa-solid fa-clock"></i> Timezone</label>
                    <select
                      className="form-input"
                      name="timezone"
                      value={settings.timezone}
                      onChange={handleChange}
                    >
                      <option value="Asia/Kolkata">India Standard Time (IST)</option>
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                      <option value="Asia/Dubai">Gulf Standard Time (GST)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="settings-section animate-in">
              <div className="section-header">
                <h2><i className="fa-solid fa-bell"></i> Notification Preferences</h2>
                <p>Control how and when you receive notifications</p>
              </div>
              
              <div className="settings-card">
                <div className="toggle-row">
                  <div className="toggle-content">
                    <div className="toggle-icon notification"><i className="fa-solid fa-bell"></i></div>
                    <div className="toggle-text">
                      <h4>Push Notifications</h4>
                      <p>Receive push notifications for important updates</p>
                    </div>
                  </div>
                  <label className="modern-toggle">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={settings.notifications}
                      onChange={handleChange}
                    />
                    <span className="toggle-track">
                      <span className="toggle-thumb"></span>
                    </span>
                  </label>
                </div>

                <div className="toggle-row">
                  <div className="toggle-content">
                    <div className="toggle-icon email"><i className="fa-solid fa-envelope"></i></div>
                    <div className="toggle-text">
                      <h4>Email Alerts</h4>
                      <p>Receive email notifications for appointments and orders</p>
                    </div>
                  </div>
                  <label className="modern-toggle">
                    <input
                      type="checkbox"
                      name="emailAlerts"
                      checked={settings.emailAlerts}
                      onChange={handleChange}
                    />
                    <span className="toggle-track">
                      <span className="toggle-thumb"></span>
                    </span>
                  </label>
                </div>

                <div className="toggle-row">
                  <div className="toggle-content">
                    <div className="toggle-icon sms"><i className="fa-solid fa-message"></i></div>
                    <div className="toggle-text">
                      <h4>SMS Alerts</h4>
                      <p>Receive SMS notifications for critical alerts</p>
                    </div>
                  </div>
                  <label className="modern-toggle">
                    <input
                      type="checkbox"
                      name="smsAlerts"
                      checked={settings.smsAlerts}
                      onChange={handleChange}
                    />
                    <span className="toggle-track">
                      <span className="toggle-thumb"></span>
                    </span>
                  </label>
                </div>

                <div className="toggle-row">
                  <div className="toggle-content">
                    <div className="toggle-icon sound"><i className="fa-solid fa-volume-high"></i></div>
                    <div className="toggle-text">
                      <h4>Sound Effects</h4>
                      <p>Play sounds for notifications and alerts</p>
                    </div>
                  </div>
                  <label className="modern-toggle">
                    <input
                      type="checkbox"
                      name="soundEnabled"
                      checked={settings.soundEnabled}
                      onChange={handleChange}
                    />
                    <span className="toggle-track">
                      <span className="toggle-thumb"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="settings-section animate-in">
              <div className="section-header">
                <h2><i className="fa-solid fa-shield-halved"></i> Security Settings</h2>
                <p>Manage your account security and privacy</p>
              </div>
              
              <div className="settings-card">
                <div className="security-item">
                  <div className="security-info">
                    <div className="security-icon"><i className="fa-solid fa-key"></i></div>
                    <div>
                      <h4>Change Password</h4>
                      <p>Update your account password regularly</p>
                    </div>
                  </div>
                  <button className="action-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="security-item">
                  <div className="security-info">
                    <div className="security-icon"><i className="fa-solid fa-mobile-screen"></i></div>
                    <div>
                      <h4>Two-Factor Authentication</h4>
                      <p>Add an extra layer of security</p>
                    </div>
                  </div>
                  <span className="status-badge inactive">Disabled</span>
                </div>

                <div className="security-item">
                  <div className="security-info">
                    <div className="security-icon"><i className="fa-solid fa-clock-rotate-left"></i></div>
                    <div>
                      <h4>Login History</h4>
                      <p>View your recent login activity</p>
                    </div>
                  </div>
                  <button className="action-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="security-item">
                  <div className="security-info">
                    <div className="security-icon danger"><i className="fa-solid fa-trash"></i></div>
                    <div>
                      <h4>Delete Account</h4>
                      <p>Permanently delete your account and data</p>
                    </div>
                  </div>
                  <button className="action-btn danger">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Backup Tab */}
          {activeTab === 'backup' && (
            <div className="settings-section animate-in">
              <div className="section-header">
                <h2><i className="fa-solid fa-cloud-arrow-up"></i> Backup & Restore</h2>
                <p>Manage your data backups and restoration</p>
              </div>
              
              <div className="settings-card">
                <div className="toggle-row">
                  <div className="toggle-content">
                    <div className="toggle-icon backup"><i className="fa-solid fa-rotate"></i></div>
                    <div className="toggle-text">
                      <h4>Auto Backup</h4>
                      <p>Automatically backup data every 24 hours</p>
                    </div>
                  </div>
                  <label className="modern-toggle">
                    <input
                      type="checkbox"
                      name="autoBackup"
                      checked={settings.autoBackup}
                      onChange={handleChange}
                    />
                    <span className="toggle-track">
                      <span className="toggle-thumb"></span>
                    </span>
                  </label>
                </div>

                <div className="backup-actions">
                  <div className="backup-info">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Last backup: December 10, 2025 at 11:30 PM</span>
                  </div>
                  <div className="backup-buttons">
                    <button className="backup-btn primary">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      Backup Now
                    </button>
                    <button className="backup-btn secondary">
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                      Restore Data
                    </button>
                    <button className="backup-btn outline">
                      <i className="fa-solid fa-download"></i>
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
