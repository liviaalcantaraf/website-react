import React from "react";
import styled from "styled-components";
import App from "../image/app.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 60%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: #19456b;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know good design means goood business</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          modi, sunt architecto aspernatur asperiores reiciendis, totam deserunt
          provident maxime neque, voluptates voluptatibus vitae expedita quos
          perspiciatis omnis obcaecati quod? Est.
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          modi.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
};

export default Feature;
