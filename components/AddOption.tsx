import * as React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NextIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { onAddPress } from "../slices/addSpaceReducer";

type AddProps = {
  title: string;
  desc: string;
  visible?: () => {};
};

const AddOption: React.FC<AddProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(onAddPress())}
      style={{ marginBottom: 10 }}
    >
      <Container>
        <Title>{props.title}</Title>
        <Description>{props.desc}</Description>
        <IconView>
          <NextIcon />
        </IconView>
      </Container>
    </TouchableOpacity>
  );
};

export default AddOption;

const Container = styled.View`
  width: 100%;
  height: 90px;
  background: #e08700;
  border-radius: 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 21px;
  font-weight: 700;
  margin-top: 22px;
  margin-left: 24px;
`;

const Description = styled.Text`
  color: #e3b671;
  font-size: 15px;
  font-weight: 700;
  margin-left: 24px;
`;

const IconView = styled.View`
  position: absolute;
  justify-content: center;
  top: 0px;
  bottom: 0px;
  right: 27px;
`;
