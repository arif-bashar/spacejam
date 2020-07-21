import * as React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { NextIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddPress,
  onCreatePress,
  onJoinPress,
} from "../slices/addSpaceReducer";
import { RootState } from "../slices/rootReducer";
import { AddSpaceModal } from "./AddSpaceModal";

type AddProps = {
  title: string;
  desc: string;
  id: string;
};

const AddOption: React.FC<AddProps> = (props) => {
  const dispatch = useDispatch();
  const { createShow, joinShow } = useSelector(
    (state: RootState) => state.addSpace
  );

  return (
    <TouchableOpacity
      onPress={() => {
        if (props.id == "create") {
          dispatch(onCreatePress());
          console.log("create");
        } else if (props.id == "join") {
          dispatch(onJoinPress());
          console.log("join");
        }
      }}
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

const ModalContainer = styled.View`
  width: 100%;
  height: 25%;
`;
