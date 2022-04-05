import React, { useState } from "react";
import styled from "styled-components";
import Tablet from "../image/tablet.svg";
import MiniCard from "./MiniCard";
import Play from "../image/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 60%;

  position: relative;
  top: 100px;
  margin-left: 50px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #191919;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #191919;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: #377850;
  color: white;
  font-size: 18px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={Tablet} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://storage.coverr.co/videos/ANCqim8Tws01XeRMzOFXzDnLSAtCC01VVF?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ5MTY2Njk0fQ.KBs5Pu2KlxYHqXYnQhgH47ZqclBEjtgVwDltLyO9nlM"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to start</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            exercitationem consequatur sequi nesciunt, quae et soluta
            perspiciatis libero omnis! Voluptate aut, dignissimos nostrum
            laudantium omnis quis quidem asperiores voluptates! Ipsa!
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How we work
          </Button>
          <Image open={open} src={Tablet} />
        </Wrapper>
      </Right>
      ;
    </Container>
  );
};

export default Service;
