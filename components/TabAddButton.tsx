import * as React from "react";
import styled from "styled-components/native";
import { AddIcon, TabAddIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { onAddPress } from "../slices/addSpaceReducer";
import { RootState } from "../slices/rootReducer";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  Value,
  useCode,
  Clock,
  Extrapolate,
  interpolate,
  startClock,
  set,
  not,
  cond,
  eq,
  add,
} from "react-native-reanimated";

function TabAddButton() {
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootState) => state.addSpace);

  const onButtonPress = () => {
    dispatch(onAddPress());
    // startAnimation.setValue(0);
  };

  return (
    <Container onPress={() => onButtonPress()}>
      <TabAddIcon />
    </Container>
  );
}

export default TabAddButton;

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
