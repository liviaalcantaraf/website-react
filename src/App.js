import styled from "styled-components";
import Navbar from "./components/Navbar";
import "./App.css";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntoShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(100% 0%, 72% 0%, 53% 100%, 55% 100%, 99% 100%);
  background-color: crimson;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
    </Container>
  );
}

export default App;
