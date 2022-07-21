import React from "react";
import styled from "styled-components";

const BottomBox = styled.div`
  height: 10vh;
`;
const P = styled.p`
  color: white;
`;

export default function Footer() {
  return (
    <BottomBox>
      <P>Criado em 2022</P>
    </BottomBox>
  );
}
