import * as React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

interface Field {
  field: string;
  isLeft: boolean;
}

export const AdjustedInputField: React.FC<Field> = (props) => {
  return (
    <Container style={styleit(props.isLeft)}>
      <Field>{props.field}</Field>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 51px;
  background: #2B2F3E;
  border-radius: 10px;
  justify-content: center;
  padding-left: 16px;
`;

const Field = styled.Text`
  color: #697295;
  font-size: 14px;
`;

const styleit = function(bool: boolean) {
  if(bool == true) {
    return {
      const Container = styled.View`
      `;
      border-radius: 20px;
    }
  }
}