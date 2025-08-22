
// Admin controllers for managing users/jobs
const { Freelancer } = require('../../models/freelancer');
const { Producer } = require('../../models/producer');
const { Job } = require('../../models/job');

exports.getAllFreelancers = async (req, res) => {
  const freelancers = await Freelancer.find();
  res.json(freelancers);
};

exports.getAllProducers = async (req, res) => {
  const producers = await Producer.find();
  res.json(producers);
};

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

exports.deleteUser = async (req, res) => {
  // Accepts type: 'freelancer' or 'producer', and userId
  const { type, userId } = req.body;
  if (type === 'freelancer') await Freelancer.findByIdAndDelete(userId);
  else if (type === 'producer') await Producer.findByIdAndDelete(userId);
  else return res.status(400).json({ message: 'Invalid type' });
  res.json({ message: 'User deleted' });
};

exports.deleteJob = async (req, res) => {
  const { jobId } = req.body;
  await Job.findByIdAndDelete(jobId);
  res.json({ message: 'Job deleted' });
};
