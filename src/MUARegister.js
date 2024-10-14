import React, { useState } from 'react';

const MUARegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profilePicture: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the backend
    };

    return (
        <div>
            <h2>Register as MUA</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                <input type="file" name="profilePicture" onChange={handleFileChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default MUARegister;
