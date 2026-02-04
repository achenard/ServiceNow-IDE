export class DRRBService {
  constructor() {
    this.baseUrl = '/api/now/table';
    this.scope = 'x_snc_hrc_change_2';
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-UserToken': window.g_ck
    };
  }

  async getDRRBRecords(params = {}) {
    try {
      const queryParams = new URLSearchParams({
        sysparm_display_value: 'all',
        sysparm_limit: params.limit || '50',
        ...params
      });

      const response = await fetch(`${this.baseUrl}/${this.scope}_drrb?${queryParams}`, {
        headers: this.headers
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch DRRB records');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching DRRB records:', error);
      throw error;
    }
  }

  async getDRRBRecord(sysId) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.scope}_drrb/${sysId}?sysparm_display_value=all`, {
        headers: this.headers
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch DRRB record');
      }

      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error fetching DRRB record:', error);
      throw error;
    }
  }

  async createDRRBRecord(data) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.scope}_drrb?sysparm_display_value=all`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create DRRB record');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating DRRB record:', error);
      throw error;
    }
  }

  async updateDRRBRecord(sysId, data) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.scope}_drrb/${sysId}?sysparm_display_value=all`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update DRRB record');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating DRRB record:', error);
      throw error;
    }
  }

  async getApplicationSystems() {
    try {
      const response = await fetch(`${this.baseUrl}/${this.scope}_application_system?sysparm_display_value=all`, {
        headers: this.headers
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch application systems');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching application systems:', error);
      throw error;
    }
  }

  async getDashboardStats() {
    try {
      // Get counts by state
      const stateCountsResponse = await fetch(
        `${this.baseUrl}/${this.scope}_drrb?sysparm_display_value=all&sysparm_group_by=state&sysparm_count=true`,
        { headers: this.headers }
      );

      // Get counts by division assignment
      const divisionCountsResponse = await fetch(
        `${this.baseUrl}/${this.scope}_drrb?sysparm_display_value=all&sysparm_group_by=division_assignment&sysparm_count=true`,
        { headers: this.headers }
      );

      // Get priority breakdown
      const priorityCountsResponse = await fetch(
        `${this.baseUrl}/${this.scope}_drrb?sysparm_display_value=all&sysparm_group_by=priority&sysparm_count=true`,
        { headers: this.headers }
      );

      const [stateCounts, divisionCounts, priorityCounts] = await Promise.all([
        stateCountsResponse.json(),
        divisionCountsResponse.json(),
        priorityCountsResponse.json()
      ]);

      return {
        stateCounts: stateCounts.result || [],
        divisionCounts: divisionCounts.result || [],
        priorityCounts: priorityCounts.result || []
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return {
        stateCounts: [],
        divisionCounts: [],
        priorityCounts: []
      };
    }
  }
}