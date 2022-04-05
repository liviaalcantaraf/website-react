import styled from "styled-components";
import woman from "../image/woman.svg";
import React from "react";

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
  color: #191919;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  color: #191919;
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
  background-color: #377850;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Right = styled.div`
  width: 40%;
`;
const Image = styled.img`
  width: 100%;
  position: relative;
  display: flex;
  top: 50px;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title> Your business with more results</Title>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          atque, et fuga unde, consequatur obcaecati dicta non quia repellat
          dolorum quae.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
        </Info>
      </Left>
      <Right>
        <Image src={woman} />
      </Right>
    </Container>
  );
};

export default Intro;
