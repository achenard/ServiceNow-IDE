import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function DRRBForm({ service, record, mode, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    short_description: '',
    description: '',
    directorate: '',
    branch: '',
    application_system: '',
    state: 'pre_approval'
  });
  const [applicationSystems, setApplicationSystems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadApplicationSystems();
    if (record && mode === 'edit') {
      setFormData({
        short_description: display(record.short_description),
        description: display(record.description),
        directorate: value(record.directorate),
        branch: display(record.branch),
        application_system: value(record.application_system),
        state: value(record.state)
      });
    }
  }, [record, mode]);

  const loadApplicationSystems = async () => {
    try {
      const systems = await service.getApplicationSystems();
      setApplicationSystems(systems);
    } catch (error) {
      console.error('Failed to load application systems:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (mode === 'create') {
        await service.createDRRBRecord(formData);
      } else {
        await service.updateDRRBRecord(value(record.sys_id), formData);
      }
      onSave();
    } catch (error) {
      alert('Failed to save request: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, val) => {
    setFormData(prev => ({
      ...prev,
      [field]: val
    }));
  };

  return (
    <div className="drrb-form">
      <div className="form-header">
        <h2>{mode === 'create' ? 'Create New DRRB Request' : 'Edit DRRB Request'}</h2>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label className="form-label">Title *</label>
          <input
            type="text"
            value={formData.short_description}
            onChange={(e) => handleChange('short_description', e.target.value)}
            className="form-control"
            required
            maxLength="160"
            placeholder="Brief title for the DRRB request"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Request Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="form-control"
            required
            rows="6"
            placeholder="Detailed description of the request, including justification and expected outcomes"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Directorate *</label>
            <select
              value={formData.directorate}
              onChange={(e) => handleChange('directorate', e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select Directorate</option>
              <option value="tagd">TAGD</option>
              <option value="rpmd">RPMD</option>
              <option value="emod">EMoD</option>
              <option value="ad">AD</option>
              <option value="mprd">MPRD</option>
              <option value="staff">STAFF</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Branch</label>
            <input
              type="text"
              value={formData.branch}
              onChange={(e) => handleChange('branch', e.target.value)}
              className="form-control"
              maxLength="100"
              placeholder="Your branch or department"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Application/System</label>
          <select
            value={formData.application_system}
            onChange={(e) => handleChange('application_system', e.target.value)}
            className="form-control"
          >
            <option value="">Select Application/System (if applicable)</option>
            {applicationSystems.map(system => (
              <option key={value(system.sys_id)} value={value(system.sys_id)}>
                {display(system.name)} - {display(system.short_description)}
              </option>
            ))}
          </select>
        </div>

        {mode === 'edit' && (
          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className="form-control"
            >
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

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Saving...' : (mode === 'create' ? 'Create Request' : 'Update Request')}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}