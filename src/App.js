import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import linkedin from "./assets/linkedin.png";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Background from "./assets/background.jpg";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
    font-family: "Orbitron", sans-serif;
}
  `;
const Header = styled.header`
  height: 10vh;
`;
const Main = styled.main`
  height: 80vh;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const Li = styled.li`
  margin-left: 1.5rem;
  color: #876e89;
  @media(max-width:525px){
    font-size:0.78rem;
  }
`;
const Item = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header>
          <Nav>
            <Ul>
              <Item to="/">
                <Li>HOME</Li>
              </Item>
              <Item to="/Timer">
                <Li>CRONÔMETRO</Li>
              </Item>
              <Li>SUSTENTABILIDADE</Li>
            </Ul>
            <a href="https://www.linkedin.com/in/yuri-gomes-992314220/">
              <img src={linkedin} alt="" />
            </a>
          </Nav>
        </Header>
      </div>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </Main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}