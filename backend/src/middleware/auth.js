const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

// Placeholder function to check if the email is authorized
function isEmailAuthorized(email) {
  const authorizedEmails = ['bjusufi7@gmail.com', 'bpodvorica5@gmail.com']; // Replace with your authorized email list
  return authorizedEmails.includes(email);
}

// Middleware function for authentication by email
function authenticateByEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (isEmailAuthorized(email)) {
    // Generate a JWT token (assuming successful email verification)
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ error: 'Unauthorized access' });
  }
}

module.exports = authenticateByEmail;
