import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  height: 100vh;
  background-image: linear-gradient(
    45deg,
    rgba(254, 213, 178, 0),
    rgba(254, 213, 178, 1)
  );
  background-repeat: no-repeat;
  background-size: auto;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4vh;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 5vh;
`;

const Box = styled.div`
  background-color: rgb(15, 43, 146);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  height: 40vh;
  width: 37vw;
`;

const Result = styled.h2`
  color: white;
  margin-bottom: 5vh;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 7vw;
  height: 5vh;
  color: white;
  background-color: rgb(255, 172, 45);
  border: none;
  border-radius: 20%;
  cursor: pointer;
`;

export default class Timer extends React.Component {
  state = {
    num: 0
  };

  start = () => {
    const pause = setInterval(() => {
      this.setState((prevState) => ({
        num: prevState.num < 30 ? prevState.num + 1 : prevState.num
      }));
    }, 1000);

    this.pause = () => {
      clearInterval(pause);
    };
  };

  reset = () => {
    this.setState({ num: 0 });
  };

  render() {
    return (
      <Container>
        <Box>
          <GlobalStyle />
          <Title>Timer</Title>
          <Result>{this.state.num}</Result>
          <Buttons>
            <Button onClick={this.start}>START</Button>
            <Button onClick={this.pause}>PAUSE</Button>
            <Button onClick={this.reset}>RESET</Button>
          </Buttons>
        </Box>
      </Container>
    );
  }
}
