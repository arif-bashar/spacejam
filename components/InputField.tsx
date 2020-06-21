import * as React from "react";
import styled from "styled-components/native";

type Field = {
  field: string;
};

export const InputField: React.FC<Field> = (props) => {
  return (
    <Container>
      <Field>{props.field}</Field>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 51px;
  background: #2b2f3e;
  border-radius: 10px;
  justify-content: center;
  padding-left: 16px;
`;

const Field = styled.Text`
  color: #697295;
  font-size: 14px;
`;
