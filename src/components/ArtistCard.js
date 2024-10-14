import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #c00000;
  border-radius: 15px; /* Change this value for more or less rounded corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 180px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px; /* Match this with the Card for a consistent look */
  object-fit: cover; /* Ensure the image covers the container nicely */
`;

const Name = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Rating = styled.p`
  color: #fff;
  margin: 5px 0;
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #ffd700;
  }
`;

const ArtistCard = ({ img, name, rating }) => {
  return (
    <Card>
      <Image src={img} alt={name} />
      <Name>{name}</Name>
      <Rating>Rating: {rating} stars</Rating>
      <ProfileLink href="#">View Profile</ProfileLink>
    </Card>
  );
};

export default ArtistCard;
