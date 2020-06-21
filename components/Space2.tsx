import * as React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

type SpaceProps = {
  color: string;
  num: string;
  spaceName: string;
  spacePattern: ImageSourcePropType;
};

export const Space2: React.FC<SpaceProps> = (props) => {
  return (
    <Container style={{ backgroundColor: props.color }}>
      <Number>{props.num}</Number>
      <SpaceName>{props.spaceName}</SpaceName>
      <SpacePattern source={props.spacePattern} />
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: 8px;
  margin-right: 8px;
  width: 170px;
  height: 240px;
  background: #d45d5d;
  border-radius: 10px;
`;

const Number = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: rgba(25, 27, 35, 0.2);
  margin-top: 18px;
  margin-left: 23px;
`;

const SpaceName = styled.Text`
  font-size: 21px;
  font-weight: 700;
  color: rgb(25, 27, 35);
  margin-top: 2px;
  margin-left: 23px;
  width: 140px;
`;

const SpacePattern = styled.Image`
  position: absolute;
  left: 35.5px;
  top: 120px;
  width: 94px;
  height: 94px;
`;
