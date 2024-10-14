import React from 'react';
import styled from 'styled-components';

const MembershipWrapper = styled.section`
  padding: 40px;
`;

const MembershipItem = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #AC1212;
`;

const Membership = () => {
  return (
    <MembershipWrapper>
      <Title>Membership Options</Title>
      <MembershipItem>
        <h3>Basic Membership</h3>
        <p>Price: $10/month</p>
        <p>Benefits: Access to exclusive blog content, discounts on masterclasses.</p>
      </MembershipItem>
      <MembershipItem>
        <h3>Premium Membership</h3>
        <p>Price: $25/month</p>
        <p>Benefits: All Basic Membership perks plus priority booking and personalized support.</p>
      </MembershipItem>
      {/* Add more membership items as needed */}
    </MembershipWrapper>
  );
};

export default Membership;
