import React, { useState } from 'react';

const MUALogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login authentication
    };

    return (
        <div>
            <h2>Login as MUA</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default MUALogin;
