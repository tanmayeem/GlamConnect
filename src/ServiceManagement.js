import React, { useState } from 'react';

const ServiceManagement = () => {
    const [services, setServices] = useState([{ name: '', description: '', price: '' }]);

    const handleInputChange = (index, e) => {
        const newServices = [...services];
        newServices[index][e.target.name] = e.target.value;
        setServices(newServices);
    };

    const addService = () => {
        setServices([...services, { name: '', description: '', price: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle services update submission
    };

    return (
        <div>
            <h3>Manage Your Services</h3>
            <form onSubmit={handleSubmit}>
                {services.map((service, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Service Name"
                            value={service.name}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <textarea
                            name="description"
                            placeholder="Service Description"
                            value={service.description}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        ></textarea>
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={service.price}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addService}>Add Another Service</button>
                <button type="submit">Update Services</button>
            </form>
        </div>
    );
};

export default ServiceManagement;
