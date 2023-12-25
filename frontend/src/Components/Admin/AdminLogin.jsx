// AdminLogin.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform validation (e.g., against stored credentials or an API)
    // For simplicity, the example checks hardcoded credentials
    if (email === "bjusufi7@gmail.com" && password === "donerkebap") {
      setLoggedIn(true);
      navigate('/admin-dashboard'); // Redirect to Dashboard if logged in
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-form">
        <label htmlFor="email">Enter email:</label><br />
        <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="password">Enter password:</label><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
