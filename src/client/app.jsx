import React, { useState, useEffect, useMemo } from 'react';
import { DRRBService } from './services/DRRBService.js';
import DashboardOverview from './components/DashboardOverview.jsx';
import DRRBList from './components/DRRBList.jsx';
import DRRBForm from './components/DRRBForm.jsx';
import './app.css';

export default function App() {
  const service = useMemo(() => new DRRBService(), []);
  const [currentView, setCurrentView] = useState('dashboard');
  const [drrbRecords, setDrrbRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [dashboardStats, setDashboardStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Load initial data
  useEffect(() => {
    loadDashboardData();
  }, [service]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [records, stats] = await Promise.all([
        service.getDRRBRecords({ sysparm_limit: 100 }),
        service.getDashboardStats()
      ]);
      
      setDrrbRecords(records);
      setDashboardStats(stats);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    loadDashboardData();
  };

  const handleViewChange = (view, record = null) => {
    setCurrentView(view);
    setSelectedRecord(record);
    // Clear filtered view when navigating away
    if (view !== 'filtered') {
      setFilteredRecords([]);
      setFilterTitle('');
    }
  };

  // New drill-down handler
  const handleDrillDown = (title, records) => {
    setFilterTitle(title);
    setFilteredRecords(records);
    setCurrentView('filtered');
  };

  const renderNavigation = () => (
    <nav className="crma-nav">
      <div className="nav-brand">
        <h1>HRC CRMA</h1>
        <span className="nav-subtitle">Change Release Management Application</span>
      </div>
      <div className="nav-menu">
        <button 
          className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => handleViewChange('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentView === 'requests' || currentView === 'filtered' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => handleViewChange('requests')}
        >
          DRRB Requests
        </button>
        <button 
          className={currentView === 'create' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => handleViewChange('create')}
        >
          Create Request
        </button>
        <button 
          className={currentView === 'help' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => handleViewChange('help')}
        >
          Need Help?
        </button>
      </div>
    </nav>
  );

  const renderBreadcrumb = () => {
    if (currentView === 'filtered' && filterTitle) {
      return (
        <div className="breadcrumb">
          <span 
            className="breadcrumb-link" 
            onClick={() => handleViewChange('dashboard')}
          >
            Dashboard
          </span>
          <span className="breadcrumb-separator"> › </span>
          <span className="breadcrumb-current">{filterTitle}</span>
          <span className="breadcrumb-count">({filteredRecords.length} records)</span>
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (loading && !drrbRecords.length) {
      return <div className="loading">Loading CRMA data...</div>;
    }

    switch (currentView) {
      case 'dashboard':
        return (
          <DashboardOverview 
            stats={dashboardStats}
            records={drrbRecords}
            onViewRecord={(record) => handleViewChange('detail', record)}
            onDrillDown={handleDrillDown}
          />
        );
      case 'requests':
        return (
          <DRRBList 
            records={drrbRecords}
            service={service}
            onRefresh={refreshData}
            onViewRecord={(record) => handleViewChange('detail', record)}
            onEditRecord={(record) => handleViewChange('edit', record)}
          />
        );
      case 'filtered':
        return (
          <div className="filtered-view">
            <div className="filtered-header">
              <div className="filtered-title-section">
                <h2>{filterTitle}</h2>
                <p className="filtered-subtitle">
                  Showing {filteredRecords.length} record{filteredRecords.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="filtered-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleViewChange('dashboard')}
                >
                  Back to Dashboard
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewChange('requests')}
                >
                  View All Requests
                </button>
              </div>
            </div>
            <DRRBList 
              records={filteredRecords}
              service={service}
              onRefresh={refreshData}
              onViewRecord={(record) => handleViewChange('detail', record)}
              onEditRecord={(record) => handleViewChange('edit', record)}
              hideFilters={true}
            />
          </div>
        );
      case 'create':
      case 'edit':
        return (
          <DRRBForm 
            service={service}
            record={selectedRecord}
            mode={currentView}
            onSave={() => {
              refreshData();
              handleViewChange('requests');
            }}
            onCancel={() => handleViewChange('requests')}
          />
        );
      case 'detail':
        return (
          <div className="record-detail">
            <div className="detail-breadcrumb">
              <span 
                className="breadcrumb-link" 
                onClick={() => handleViewChange('requests')}
              >
                DRRB Requests
              </span>
              <span className="breadcrumb-separator"> › </span>
              <span className="breadcrumb-current">Request Details</span>
            </div>
            <h2>DRRB Request Details</h2>
            {selectedRecord && (
              <div className="detail-content">
                <div className="detail-header">
                  <h3>{selectedRecord.short_description?.display_value}</h3>
                  <span className={`status-badge status-${selectedRecord.state?.value}`}>
                    {selectedRecord.state?.display_value}
                  </span>
                </div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DRRB ID:</label>
                    <span>{selectedRecord.number?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Priority:</label>
                    <span className={`priority-${selectedRecord.priority?.value}`}>
                      Priority {selectedRecord.priority?.display_value}
                    </span>
                  </div>
                  <div className="detail-field">
                    <label>Directorate:</label>
                    <span>{selectedRecord.directorate?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Branch:</label>
                    <span>{selectedRecord.branch?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Submitter:</label>
                    <span>{selectedRecord.submitter?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Application/System:</label>
                    <span>{selectedRecord.application_system?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Division Assignment:</label>
                    <span>{selectedRecord.division_assignment?.display_value}</span>
                  </div>
                  <div className="detail-field">
                    <label>Created:</label>
                    <span>{new Date(selectedRecord.sys_created_on?.value).toLocaleString()}</span>
                  </div>
                </div>
                <div className="detail-description">
                  <label>Description:</label>
                  <p>{selectedRecord.description?.display_value}</p>
                </div>
                <div className="detail-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleViewChange('edit', selectedRecord)}
                  >
                    Edit Request
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleViewChange('requests')}
                  >
                    Back to List
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleViewChange('dashboard')}
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 'help':
        return (
          <div className="help-content">
            <h2>CRMA Help $[AMP] Support</h2>
            <div className="help-section">
              <h3>Dashboard Drill-Down Features</h3>
              <ul>
                <li><strong>Click any statistic card</strong> to see the underlying requests</li>
                <li><strong>Click status indicators</strong> to filter by workflow state</li>
                <li><strong>Click division cards</strong> to see assigned requests</li>
                <li><strong>Click priority bars</strong> to view requests by priority level</li>
                <li><strong>Click recent requests</strong> to view full details</li>
              </ul>
            </div>
            <div className="help-section">
              <h3>Getting Started</h3>
              <ul>
                <li>Use "Create Request" to submit new DRRB requests</li>
                <li>Track your requests through the Dashboard</li>
                <li>View all requests in the "DRRB Requests" section</li>
                <li>Click dashboard widgets to drill down into specific data</li>
              </ul>
            </div>
            <div className="help-section">
              <h3>Workflow Process</h3>
              <ol>
                <li><strong>Submit:</strong> Functional submits DRRB request</li>
                <li><strong>Functional Director Review:</strong> Approve/Deny/Request Info</li>
                <li><strong>VAT Review:</strong> Virtual Architecture Team evaluation</li>
                <li><strong>IT Ops Review:</strong> Determines voting vs non-voting path</li>
                <li><strong>Voting (if required):</strong> Directors/Staff prioritization</li>
                <li><strong>Assignment:</strong> Routed to appropriate division</li>
                <li><strong>Implementation:</strong> Technical work performed</li>
              </ol>
            </div>
            <div className="help-section">
              <h3>Contact Support</h3>
              <p>For technical issues or questions about the CRMA system:</p>
              <ul>
                <li>Email: hrc.crma.support@army.mil</li>
                <li>Phone: (502) 626-CRMA (2762)</li>
                <li>Help Desk: Submit ticket through IT Service Portal</li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div>View not found</div>;
    }
  };

  return (
    <div className="crma-app">
      {renderNavigation()}
      <main className="crma-content">
        {renderBreadcrumb()}
        {renderContent()}
      </main>
    </div>
  );
}