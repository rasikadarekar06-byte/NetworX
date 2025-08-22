import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPanelNav() {
  return (
    <nav className="admin-nav">
      <Link to="/admin">Dashboard</Link>
      <button onClick={() => { localStorage.removeItem('adminToken'); window.location.href = '/admin/login'; }}>Logout</button>
    </nav>
  );
}
