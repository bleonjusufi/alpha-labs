// Form component to collect email
const AdminLogin = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      
      // Send the email to the server for authentication
      try {
        const response = await fetch('/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        // Handle response - Redirect to admin dashboard if authenticated
      } catch (error) {
        // Handle error
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" required />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default AdminLogin