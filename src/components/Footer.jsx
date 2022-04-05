import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: white;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  margin-right: 20px;
`;
const Copyright = styled.span``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>LinkedIn</ListItem>
          <ListItem>Code</ListItem>
        </List>
        <Copyright>Lívia A.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
