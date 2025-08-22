// Admin authentication controller
const jwt = require('jsonwebtoken');
const ADMIN = { username: 'admin', password: 'admin123' };

exports.adminLogin = (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
};

exports.adminLogout = (req, res) => {
  // For JWT, logout is handled on client by deleting token
  res.json({ message: 'Logged out' });
};
