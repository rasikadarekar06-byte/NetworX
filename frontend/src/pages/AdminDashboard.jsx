import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminUserList from '../components/AdminUserList';
import AdminJobList from '../components/AdminJobList';
import '../static/css/pages/AdminDashboard.css';

export default function AdminDashboard() {
  const [freelancers, setFreelancers] = useState([]);
  const [producers, setProducers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [tab, setTab] = useState('freelancers');

  const token = localStorage.getItem('adminToken');
  const headers = { Authorization: `Bearer ${token}` };

  const reload = () => {
    if (token) {
      axios.get('/api/admin/freelancers', { headers }).then(r => setFreelancers(r.data));
      axios.get('/api/admin/producers', { headers }).then(r => setProducers(r.data));
      axios.get('/api/admin/jobs', { headers }).then(r => setJobs(r.data));
    }
  };

  useEffect(() => { reload(); }, [token]);

  if (!token) return <div>Unauthorized</div>;

  return (
    <div className="admin-dashboard-bg">
      <div className="admin-dashboard">
        <h2 style={{ color: '#3686ae', marginBottom: '1.5rem', fontWeight: 700 }}>Admin Dashboard</h2>
        <div className="admin-tabs">
          <button className={`admin-tab-btn${tab === 'freelancers' ? ' active' : ''}`} onClick={() => setTab('freelancers')}>Freelancers</button>
          <button className={`admin-tab-btn${tab === 'producers' ? ' active' : ''}`} onClick={() => setTab('producers')}>Producers</button>
          <button className={`admin-tab-btn${tab === 'jobs' ? ' active' : ''}`} onClick={() => setTab('jobs')}>Jobs</button>
        </div>
        <div className="admin-section">
          {tab === 'freelancers' && (
            <div className="admin-list">
              <h3>Freelancers</h3>
              <AdminUserList users={freelancers} type="freelancer" reload={reload} />
            </div>
          )}
          {tab === 'producers' && (
            <div className="admin-list">
              <h3>Producers</h3>
              <AdminUserList users={producers} type="producer" reload={reload} />
            </div>
          )}
          {tab === 'jobs' && (
            <div className="admin-list">
              <h3>Jobs</h3>
              <AdminJobList jobs={jobs} reload={reload} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
