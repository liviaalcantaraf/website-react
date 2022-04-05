import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: #377850;
  background-color: white;
  border-color: #88ae95;
  border-radius: 20px;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
`;
const Button = styled.button`
  border: none;
  background-color: #377850;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        €<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>Lorem ipsum dolor sit amet </ListItem>
        <ListItem>Lorem ipsum dolor sit amet </ListItem>
        <ListItem>Lorem ipsum dolor sit amet </ListItem>
        <ListItem>Lorem ipsum dolor sit amet </ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
