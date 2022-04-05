import React from "react";
import styled from "styled-components";
import App from "../image/app.svg";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 70%;
  display: flex;
  position: relative;
  top: 80px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 70px;
  color: #191919;
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

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>More</b> creativity <br />
          <b>Better</b> results
        </Title>
        <SubTitle>Your subtitle about your brand</SubTitle>
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
      </Right>
    </Container>
  );
};

export default Feature;
