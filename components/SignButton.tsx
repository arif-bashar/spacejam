import * as React from "react";
import styled from "styled-components/native";

type ButtonProps = {
  title: string;
};

export const SignButton: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 55px;
  background: #e08700;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 21px;
  font-weight: 700;
  color: white;
`;
