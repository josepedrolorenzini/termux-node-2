const express = require('express');
const router = express.Router();

// Middleware specific to ALL user routes
const userLogger = (req, res, next) => {
  console.log('User-specific route accessed');
  next();
};

router.use(userLogger);

// Route: /user/profile
router.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

// Route: /user/settings
router.get('/settings', (req, res) => {
  res.send('User Settings Page');
});

  router.get("/routing" , (req, res) => {
	res.send("user routing Home Page - middleware here!'");
	});

module.exports = router; // Export the router