import React from 'react';
import ProfileManagement from './ProfileManagement';
import ServiceManagement from './ServiceManagement';
import AvailabilityCalendar from './AvailabilityCalendar';
import StatsAndInsights from './StatsAndInsights';

const MUADashboard = () => {
    return (
        <div>
            <h2>Welcome to Your Dashboard</h2>
            <ProfileManagement />
            <ServiceManagement />
            <AvailabilityCalendar />
            <StatsAndInsights />
        </div>
    );
};

export default MUADashboard;
