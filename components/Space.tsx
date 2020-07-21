import * as React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";

type SpaceProps = {
  num: string;
  spaceName: string;
  spacePattern: ImageSourcePropType;
};

export const Space: React.FC<SpaceProps> = (props) => {
  const navigation = useNavigation();

  const onEnterPlayer = () => {
    navigation.navigate("Player");
    // startAnimation.setValue(0);
  };

  return (
    <Container onPress={() => onEnterPlayer()}>
      <Number>{props.num}</Number>
      <SpaceName>{props.spaceName}</SpaceName>
      <SpacePattern source={props.spacePattern} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin-bottom: 8px;
  width: 100%;
  height: 140px;
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
  width: 100px;
`;

const SpacePattern = styled.Image`
  position: absolute;
  right: 33px;
  top: 22px;
  width: 94px;
  height: 94px;
`;
