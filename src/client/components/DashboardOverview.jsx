import React from 'react';
import { display, value } from '../utils/fields.js';
import './DashboardOverview.css';

export default function DashboardOverview({ stats, records, onViewRecord, onDrillDown }) {
  if (!stats) {
    return <div className="loading">Loading dashboard statistics...</div>;
  }

  const getStateCounts = () => {
    const stateCounts = {};
    stats.stateCounts.forEach(item => {
      stateCounts[item.state?.value || 'unknown'] = parseInt(item.stats?.count || 0);
    });
    return stateCounts;
  };

  const getDivisionCounts = () => {
    const divisionCounts = {};
    stats.divisionCounts.forEach(item => {
      const division = item.division_assignment?.value;
      if (division) {
        divisionCounts[division] = parseInt(item.stats?.count || 0);
      }
    });
    return divisionCounts;
  };

  const getPriorityCounts = () => {
    const priorityCounts = {};
    stats.priorityCounts.forEach(item => {
      priorityCounts[item.priority?.value || 'unknown'] = parseInt(item.stats?.count || 0);
    });
    return priorityCounts;
  };

  const stateCounts = getStateCounts();
  const divisionCounts = getDivisionCounts();
  const priorityCounts = getPriorityCounts();

  const getRecentRecords = () => {
    return records
      .sort((a, b) => new Date(value(b.sys_created_on)) - new Date(value(a.sys_created_on)))
      .slice(0, 5);
  };

  const getHighPriorityRecords = () => {
    return records
      .filter(record => parseInt(value(record.priority)) <= 2)
      .sort((a, b) => parseInt(value(a.priority)) - parseInt(value(b.priority)))
      .slice(0, 5);
  };

  // Drill-down handlers
  const handleStatusDrillDown = (status) => {
    const filteredRecords = records.filter(record => value(record.state) === status);
    onDrillDown(`${status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Requests`, filteredRecords);
  };

  const handlePriorityDrillDown = (priority) => {
    const filteredRecords = records.filter(record => parseInt(value(record.priority)) === priority);
    onDrillDown(`Priority ${priority} Requests`, filteredRecords);
  };

  const handleDivisionDrillDown = (division) => {
    const filteredRecords = records.filter(record => value(record.division_assignment) === division);
    const divisionName = {
      'id': 'Innovation Division (ID)',
      'gpd': 'General Purpose Division (GPD)',
      'admd': 'Architecture Design & Management Division (ADMD)',
      'g3': 'G3 Operations',
      'g6': 'G6 Operations'
    };
    onDrillDown(`${divisionName[division]} Requests`, filteredRecords);
  };

  const handleAllRequestsDrillDown = () => {
    onDrillDown('All DRRB Requests', records);
  };

  const handlePendingDrillDown = () => {
    const filteredRecords = records.filter(record => value(record.state) === 'pending');
    onDrillDown('Pending Approval Requests', filteredRecords);
  };

  const handleInProgressDrillDown = () => {
    const filteredRecords = records.filter(record => 
      ['vat_review', 'it_ops_review', 'voting'].includes(value(record.state))
    );
    onDrillDown('In Progress Requests', filteredRecords);
  };

  const handleCompletedDrillDown = () => {
    const filteredRecords = records.filter(record => value(record.state) === 'completed');
    onDrillDown('Completed Requests', filteredRecords);
  };

  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h2>DRRB Dashboard</h2>
        <p className="dashboard-subtitle">Digital Requirements Review Board Status Overview - Click any widget to drill down</p>
      </div>

      {/* Status Overview Cards - Now Clickable */}
      <div className="stats-grid">
        <div className="stat-card clickable" onClick={handleAllRequestsDrillDown}>
          <div className="stat-number">{records.length}</div>
          <div className="stat-label">Total Requests</div>
          <div className="drill-hint">Click to view all</div>
        </div>
        <div className="stat-card pending clickable" onClick={handlePendingDrillDown}>
          <div className="stat-number">{stateCounts.pending || 0}</div>
          <div className="stat-label">Pending Approval</div>
          <div className="drill-hint">Click to view details</div>
        </div>
        <div className="stat-card in-progress clickable" onClick={handleInProgressDrillDown}>
          <div className="stat-number">
            {(stateCounts.vat_review || 0) + (stateCounts.it_ops_review || 0) + (stateCounts.voting || 0)}
          </div>
          <div className="stat-label">In Progress</div>
          <div className="drill-hint">Click to view details</div>
        </div>
        <div className="stat-card completed clickable" onClick={handleCompletedDrillDown}>
          <div className="stat-number">{stateCounts.completed || 0}</div>
          <div className="stat-label">Completed</div>
          <div className="drill-hint">Click to view details</div>
        </div>
      </div>

      {/* Workflow Status Breakdown - Now Clickable */}
      <div className="dashboard-section">
        <h3>Request Status Breakdown <span className="section-hint">(Click any status to drill down)</span></h3>
        <div className="status-grid">
          {Object.entries(stateCounts).map(([state, count]) => (
            <div 
              key={state} 
              className={`status-item status-${state} clickable`}
              onClick={() => handleStatusDrillDown(state)}
              title={`Click to view all ${state.replace(/_/g, ' ')} requests`}
            >
              <span className="status-count">{count}</span>
              <span className="status-name">
                {state.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              <div className="drill-hint">Click to drill down</div>
            </div>
          ))}
        </div>
      </div>

      {/* Division Workload - Now Clickable */}
      <div className="dashboard-section">
        <h3>Division Assignments <span className="section-hint">(Click any division to see assigned requests)</span></h3>
        <div className="division-grid">
          <div className="division-card clickable" onClick={() => handleDivisionDrillDown('id')}>
            <h4>Innovation Division (ID)</h4>
            <div className="division-count">{divisionCounts.id || 0}</div>
            <p>New technology $[AMP] innovation initiatives</p>
            <div className="drill-hint">Click to view assigned requests</div>
          </div>
          <div className="division-card clickable" onClick={() => handleDivisionDrillDown('gpd')}>
            <h4>General Purpose Division (GPD)</h4>
            <div className="division-count">{divisionCounts.gpd || 0}</div>
            <p>Standard operational requests</p>
            <div className="drill-hint">Click to view assigned requests</div>
          </div>
          <div className="division-card clickable" onClick={() => handleDivisionDrillDown('admd')}>
            <h4>Architecture Design $[AMP] Management (ADMD)</h4>
            <div className="division-count">{divisionCounts.admd || 0}</div>
            <p>Architecture $[AMP] design initiatives</p>
            <div className="drill-hint">Click to view assigned requests</div>
          </div>
          <div className="division-card clickable" onClick={() => handleDivisionDrillDown('g3')}>
            <h4>G3 Operations</h4>
            <div className="division-count">{divisionCounts.g3 || 0}</div>
            <p>Non-enterprise G3 initiatives</p>
            <div className="drill-hint">Click to view assigned requests</div>
          </div>
          <div className="division-card clickable" onClick={() => handleDivisionDrillDown('g6')}>
            <h4>G6 Operations</h4>
            <div className="division-count">{divisionCounts.g6 || 0}</div>
            <p>Non-enterprise G6 initiatives</p>
            <div className="drill-hint">Click to view assigned requests</div>
          </div>
        </div>
      </div>

      {/* Priority Breakdown - Now Clickable */}
      <div className="dashboard-section">
        <h3>Priority Distribution <span className="section-hint">(Click any priority bar to see requests)</span></h3>
        <div className="priority-chart">
          {[1, 2, 3, 4, 5].map(priority => (
            <div 
              key={priority} 
              className={`priority-bar priority-${priority} clickable`}
              onClick={() => handlePriorityDrillDown(priority)}
              title={`Click to view all Priority ${priority} requests`}
            >
              <div className="priority-label">Priority {priority}</div>
              <div className="priority-count">{priorityCounts[priority] || 0}</div>
              <div 
                className="priority-fill" 
                style={{width: `${((priorityCounts[priority] || 0) / Math.max(records.length, 1)) * 100}%`}}
              ></div>
              <div className="drill-hint">Click to drill down</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Requests - Already Clickable */}
      <div className="dashboard-section">
        <h3>Recent Requests <span className="section-hint">(Click any request to view details)</span></h3>
        <div className="recent-requests">
          {getRecentRecords().map(record => (
            <div key={value(record.sys_id)} className="recent-item clickable" onClick={() => onViewRecord(record)}>
              <div className="recent-title">{display(record.short_description)}</div>
              <div className="recent-meta">
                <span className={`status-badge status-${value(record.state)}`}>
                  {display(record.state)}
                </span>
                <span className="recent-date">
                  {new Date(value(record.sys_created_on)).toLocaleDateString()}
                </span>
              </div>
              <div className="drill-hint">Click to view request details</div>
            </div>
          ))}
          {getRecentRecords().length === 0 && (
            <div className="no-data">No recent requests available</div>
          )}
        </div>
      </div>

      {/* High Priority Alerts - Already Clickable */}
      {getHighPriorityRecords().length > 0 && (
        <div className="dashboard-section">
          <h3>High Priority Requests <span className="section-hint">(Click any alert to view details)</span></h3>
          <div className="priority-alerts">
            {getHighPriorityRecords().map(record => (
              <div key={value(record.sys_id)} className="priority-alert clickable" onClick={() => onViewRecord(record)}>
                <div className="alert-priority">P{display(record.priority)}</div>
                <div className="alert-content">
                  <div className="alert-title">{display(record.short_description)}</div>
                  <div className="alert-meta">
                    {display(record.directorate)} • {display(record.state)}
                  </div>
                </div>
                <div className="drill-hint">Click to view request details</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}