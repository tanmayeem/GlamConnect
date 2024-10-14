import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 5px;
  height: 150px;
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

const Title = styled.h2`
  margin-bottom: 20px;
  color: #AC1212;
`;

const ContactUs = () => {
  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactWrapper>
  );
};

export default ContactUs;
