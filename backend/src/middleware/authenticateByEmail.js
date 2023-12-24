// List of allowed email addresses
const allowedEmails = ['bjusufi7@gmail.com', 'bpodvorica5@gmail.com'];

// Middleware function for email-based authentication
function authenticateByEmail(req, res, next) {
  const email = req.headers['email']; // Assuming email is sent in headers
  
  if (email && allowedEmails.includes(email)) {
    // If the email is allowed, proceed to the next middleware or route
    next();
  } else {
    // If the email is not allowed, send a 401 Unauthorized response
    res.status(401).json({ message: 'Unauthorized access' });
  }
}

module.exports = authenticateByEmail;
