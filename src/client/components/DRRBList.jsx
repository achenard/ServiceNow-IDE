import React, { useState } from 'react';
import { display, value } from '../utils/fields.js';

export default function DRRBList({ records, service, onRefresh, onViewRecord, onEditRecord, hideFilters = false }) {
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const filteredRecords = records.filter(record => {
    const matchesText = !filter || 
      display(record.short_description).toLowerCase().includes(filter.toLowerCase()) ||
      display(record.number).toLowerCase().includes(filter.toLowerCase()) ||
      display(record.directorate).toLowerCase().includes(filter.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || value(record.state) === statusFilter;
    
    return matchesText && matchesStatus;
  });

  const handleStatusChange = async (record, newStatus) => {
    setLoading(true);
    try {
      await service.updateDRRBRecord(value(record.sys_id), { state: newStatus });
      onRefresh();
    } catch (error) {
      alert('Failed to update status: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drrb-list">
      <div className="list-header">
        <h2>DRRB Requests</h2>
        {!hideFilters && (
          <div className="list-controls">
            <input
              type="text"
              placeholder="Search requests..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control search-input"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-control status-filter"
            >
              <option value="all">All Statuses</option>
              <option value="pre_approval">Pre-Approval</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
              <option value="in_review">In Review</option>
              <option value="vat_review">VAT Review</option>
              <option value="it_ops_review">IT Ops Review</option>
              <option value="voting">Voting</option>
              <option value="tasked">Tasked</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        )}
      </div>

      <div className="records-table">
        <div className="table-header">
          <div className="col-id">DRRB ID</div>
          <div className="col-title">Title</div>
          <div className="col-priority">Priority</div>
          <div className="col-status">Status</div>
          <div className="col-directorate">Directorate</div>
          <div className="col-actions">Actions</div>
        </div>
        
        {(hideFilters ? records : filteredRecords).map(record => (
          <div key={value(record.sys_id)} className="table-row">
            <div className="col-id">{display(record.number)}</div>
            <div className="col-title" title={display(record.short_description)}>
              {display(record.short_description)}
            </div>
            <div className="col-priority">
              <span className={`priority-${value(record.priority)}`}>
                P{display(record.priority)}
              </span>
            </div>
            <div className="col-status">
              <span className={`status-badge status-${value(record.state)}`}>
                {display(record.state)}
              </span>
            </div>
            <div className="col-directorate">{display(record.directorate)}</div>
            <div className="col-actions">
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => onViewRecord(record)}
              >
                View
              </button>
              <button 
                className="btn btn-sm btn-secondary"
                onClick={() => onEditRecord(record)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
        
        {(hideFilters ? records : filteredRecords).length === 0 && (
          <div className="no-records">
            {filter || statusFilter !== 'all' ? 'No matching records found.' : 'No DRRB requests found.'}
          </div>
        )}
      </div>
    </div>
  );
}