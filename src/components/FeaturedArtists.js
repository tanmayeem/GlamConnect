import React from 'react';
import styled from 'styled-components';
import ArtistCard from './ArtistCard';
import artist1 from '../assets/images/artist1.jpg';

const FeaturedWrapper = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adds space between the cards */
`;

const FeaturedArtists = () => {
  return (
    <FeaturedWrapper>
      <ArtistCard img={artist1} name="Tanmayi" rating="4.5" />
      <ArtistCard img={artist1} name="Mrunmayi" rating="4.7" />
      <ArtistCard img={artist1} name="Chinmayi" rating="4.9" />
      <ArtistCard img={artist1} name="Shrimayi" rating="4.7" />
      <ArtistCard img={artist1} name="Devamayi" rating="4.9" />
      <ArtistCard img={artist1} name="Shrimayi" rating="4.7" />
      <ArtistCard img={artist1} name="Devamayi" rating="4.9" />
    </FeaturedWrapper>
  );
};

export default FeaturedArtists;
