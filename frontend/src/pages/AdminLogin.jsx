import { useState, useEffect } from 'react';
import '../static/css/components/FreelancerSignin.css';
import axios from 'axios';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/admin/login', {
        username: username,
        password: password
      })
      .then((response) => {
        localStorage.setItem("adminToken", response.data.token);
        onLogin();
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message || 'Invalid credentials');
      });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f7fa' }}>
      <div className="signin_container">
        <div className="heading">
          Admin Login
        </div>
        <form className="form_fields" onSubmit={handleSubmit}>
          <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="form_submit">
            <button type="submit">Login</button>
          </div>
        </form>
        {errorMessage ? (
          <div className='freelancer_informative_message'><span>{errorMessage}</span></div>
        ) : null}
      </div>
    </div>
  );
}
