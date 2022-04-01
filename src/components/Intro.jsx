import React from "react";

import styled from "styled-components";
import woman from "../image/woman.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  margin-top: 50px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  padding: 15px;
  background-color: #19456b;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title> Your business with more creativity</Title>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          atque, et fuga unde, consequatur obcaecati dicta non quia repellat
          dolorum quae.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us +351 999 999 999</Phone>
            <ContactText>For any question</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={woman} />
      </Right>
    </Container>
  );
};

export default Intro;
