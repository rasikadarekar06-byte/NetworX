import React from 'react';
import axios from 'axios';

export default function AdminJobList({ jobs, reload }) {
  const token = localStorage.getItem('adminToken');
  const headers = { Authorization: `Bearer ${token}` };

  const handleDelete = async (jobId) => {
    if (window.confirm('Delete this job?')) {
      await axios.delete('/api/admin/job', { headers, data: { jobId } });
      reload();
    }
  };

  return (
    <ul>
      {jobs.map(j => (
        <li key={j._id}>
          <span style={{ fontWeight: 500 }}>{j.title}</span>
          <button onClick={() => handleDelete(j._id)}>Delete</button>
        </li>
      ))}
      {jobs.length === 0 && <li style={{color:'#888', textAlign:'center', width:'100%'}}>No jobs found.</li>}
    </ul>
  );
}
