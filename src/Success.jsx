import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Para = styled.p`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin: auto;
  background: green;
  color: white;
  border-radius: 5px;
`;

const Success = () => {
  return (
    <Container>
        <Para> Success </Para>
    </Container>
  );
};

export default Success;
