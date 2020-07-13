import * as React from "react";
import styled from "styled-components/native";
import { AddIcon, TabAddIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { onAddPress } from "../slices/addSpaceReducer";
import { RootState } from "../slices/rootReducer";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

function TabAddButton() {
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootState) => state.addSpace);

  return (
    <Container onPress={() => dispatch(onAddPress())}>
      <TabAddIcon />
    </Container>
  );
}

export default TabAddButton;

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
