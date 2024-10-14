import React from 'react';
import styled from 'styled-components';
import ArtistCard from '../components/ArtistCard';
import artist1 from '../assets/images/artist1.jpg';

const ProfileWrapper = styled.section`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MUAProfiles = () => {
  return (
    <ProfileWrapper>
      <ArtistCard img={artist1} name="Artist 1" rating="4.5" />
      <ArtistCard img={artist1} name="Artist 2" rating="4.7" />
      <ArtistCard img={artist1} name="Artist 3" rating="4.9" />
      {/* Add more ArtistCard components as needed */}
    </ProfileWrapper>
  );
};

export default MUAProfiles;
