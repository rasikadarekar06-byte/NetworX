// Admin routes
const express = require('express');
const router = express.Router();
const { adminLogin, adminLogout } = require('../controllers/admin/adminAuth');
const { getAllFreelancers, getAllProducers, getAllJobs, deleteUser, deleteJob } = require('../controllers/admin/adminControllers');
const jwt = require('jsonwebtoken');

// Simple admin auth middleware
function adminAuth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    if (decoded.role !== 'admin') throw new Error();
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

router.post('/login', adminLogin);
router.post('/logout', adminLogout);

// Protected admin routes
router.get('/freelancers', adminAuth, getAllFreelancers);
router.get('/producers', adminAuth, getAllProducers);
router.get('/jobs', adminAuth, getAllJobs);
router.delete('/user', adminAuth, deleteUser);
router.delete('/job', adminAuth, deleteJob);

module.exports = router;
