import React, { useState } from "react";

function AdminSignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // For debugging - check if form data is logged correctly
    
        try {
            const response = await fetch('http://localhost:8080/', { // Replace '/api/signup' with your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            // Handle response if necessary
            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="admin-signup__form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label><br />
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                /><br />
                <label htmlFor="email">Email</label><br />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                /><br />
                <label htmlFor="password">Password</label><br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br />
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
}

export default AdminSignUp;
