import React from 'react';
import styled from 'styled-components';

const MasterclassWrapper = styled.section`
  padding: 40px;
`;

const MasterclassItem = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #AC1212;
`;

const Masterclasses = () => {
  return (
    <MasterclassWrapper>
      <Title>Upcoming Masterclasses</Title>
      <MasterclassItem>
        <h3>Masterclass 1</h3>
        <p>Date: June 1, 2024</p>
        <p>Topic: Bridal Makeup Techniques</p>
      </MasterclassItem>
      <MasterclassItem>
        <h3>Masterclass 2</h3>
        <p>Date: June 15, 2024</p>
        <p>Topic: Creative Makeup for Photoshoots</p>
      </MasterclassItem>
      {/* Add more masterclass items as needed */}
    </MasterclassWrapper>
  );
};

export default Masterclasses;
