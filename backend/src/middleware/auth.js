const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

// Middleware function for generic authentication
function authenticate(req, res, next) {
  const authToken = req.headers.authorization; // Extract token from request headers

  if (authToken) {
    // Verify the token (assuming it's a JWT)
    jwt.verify(authToken, jwtSecret, (err, decoded) => {
      if (err) {
        // Token verification failed, send a 401 Unauthorized response
        res.status(401).json({ message: 'Invalid token' });
      } else {
        // Token is valid, decoded contains the token payload
        // You can optionally do something with the decoded data
        
        // Allow access to the next middleware or route
        next();
      }
    });
  } else {
    // If no token provided, send a 401 Unauthorized response
    res.status(401).json({ message: 'Unauthorized access' });
  }
}

module.exports = authenticate;
