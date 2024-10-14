import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/hero-bg.jpg';

const HeroWrapper = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
`;

const HeroText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #AC1212;
  border: none;
  color: #FFF;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #DC901E;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper className="hero">
      <HeroText>Find Your MUA</HeroText>
      <SearchBar>
        <Input type="text" placeholder="Location" />
        <Input type="text" placeholder="Service Type" />
        <Button>Search</Button>
      </SearchBar>
    </HeroWrapper>
  );
};

export default Hero;
