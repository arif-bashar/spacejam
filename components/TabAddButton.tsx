import * as React from "react";
import styled from "styled-components/native";
import { TabAddIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { onAddPress } from "../slices/addSpaceReducer";
import { RootState } from "../slices/rootReducer";

function TabAddButton() {
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootState) => state.addSpace);

  return (
    <Container
      onPress={() => dispatch(onAddPress())}
      style={{ zIndex: show ? 1 : -2 }}
    >
      <TabAddIcon />
    </Container>
  );
}

export default TabAddButton;

const Container = styled.TouchableOpacity`
  margin-bottom: 50px;
`;
