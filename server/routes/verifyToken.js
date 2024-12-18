const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  console.log('Authorization Header:', authHeader); // Log the authorization header

  if (!authHeader) return res.status(403).send('Access denied.');

  const token = authHeader.split(' ')[1]; // Split to get the token part
  
  if (!token) return res.status(403).send('Access denied.');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); // Use your secret key
    req.user = verified;
    console.log('Verified User:', req.user); // Log the verified user
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

module.exports = verifyToken;
