import React, { useState } from 'react';

const ProfileManagement = () => {
    const [profileData, setProfileData] = useState({
        bio: '',
        contact: '',
        portfolio: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setProfileData({ ...profileData, portfolio: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update submission
    };

    return (
        <div>
            <h3>Manage Your Profile</h3>
            <form onSubmit={handleSubmit}>
                <textarea name="bio" placeholder="Bio" value={profileData.bio} onChange={handleInputChange} required></textarea>
                <input type="text" name="contact" placeholder="Contact Info" value={profileData.contact} onChange={handleInputChange} required />
                <input type="file" name="portfolio" onChange={handleFileChange} multiple />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default ProfileManagement;
