import React from 'react';
import axios from 'axios';

export default function AdminUserList({ users, type, reload }) {
  const token = localStorage.getItem('adminToken');
  const headers = { Authorization: `Bearer ${token}` };

  const handleDelete = async (userId) => {
    if (window.confirm('Delete this user?')) {
      await axios.delete('/api/admin/user', { headers, data: { type, userId } });
      reload();
    }
  };

  return (
    <ul>
      {users.map(u => (
        <li key={u._id}>
          <span style={{ fontWeight: 500 }}>{u.name || u.email}</span>
          <button onClick={() => handleDelete(u._id)}>Delete</button>
        </li>
      ))}
      {users.length === 0 && <li style={{color:'#888', textAlign:'center', width:'100%'}}>No users found.</li>}
    </ul>
  );
}
