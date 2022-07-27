import React from "react";
import styled from "styled-components";
import Profile from "../assets/EU.jpg";

const MainBox = styled.div`
  margin-top: 30vh;
  margin-left:2vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Photo = styled.img`
  height: 40vh;
  border-radius: 50%;
  @media(max-width:525px){
    height:35vw;
  }
`;
const TextBox = styled.div`
  margin-left: 4vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;
const H1 = styled.h1`
  color: #e172cf;
  font-size: 3rem;
  text-shadow: 1px 0px 0px black, -1px 0px 0px black, 0px 1px 0px black,
    0px -1px 0px black;
    @media(max-width:525px){
        font-size:2rem;
      }
`;
const H3 = styled.h3`
  color: #f6fcde;
  text-shadow: 1px 0px 0px black, -1px 0px 0px black, 0px 1px 0px black,
    0px -1px 0px black;
    @media(max-width:525px){
        font-size:1rem;
      }
`;

export default function Home() {
  return (
    <main>
      <MainBox>
        <Photo src={Profile} alt="" />
        <TextBox>
          <H1>Yuri Gomes</H1>
          <H3>
            Sou um aspirante a Web Developer, em busca do meu propósito e de meu
            lugar ao sol.
          </H3>
        </TextBox>
      </MainBox>
    </main>
  );
}
