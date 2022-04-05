import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #88ae95;
  color: #191919;
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
          <ListItem>
            <a href="https://www.linkedin.com/in/liviaalcantaraf/">LinkedIn</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/liviaalcantaraf/website-react">
              Open Code
            </a>
          </ListItem>
        </List>
        <Copyright>Lívia A.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
