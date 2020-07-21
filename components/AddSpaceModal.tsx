import * as React from "react";
import styled from "styled-components/native";
import { useState } from "react";
import { SignButton } from "../components/SignButton";
import { TouchableOpacity } from "react-native";
import { XIcon } from "../components/Icons";
import { useDispatch } from "react-redux";
import { onClosePress } from "../slices/addSpaceReducer";

type Field = {
  title: string;
  description: string;
  inputField: string;
  buttonName: string;
};

export const AddSpaceModal: React.FC<Field> = (props) => {
  const [roomName, setRoomName] = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
      <XView onPress={() => dispatch(onClosePress())}>
        <XIcon />
      </XView>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <InputView>
        <InputField
          onChangeText={(name) => setRoomName(name)}
          placeholder={props.inputField}
          placeholderTextColor="#697295"
        />
      </InputView>
      <TouchableOpacity>
        <SignInView>
          <SignButton title={props.buttonName} />
        </SignInView>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  background: #2b2f3e;
  width: 100%;
  height: 40%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

const XView = styled.TouchableOpacity`
  position: absolute;
  top: 13px;
  right: 18px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  margin-top: 40px;
  margin-bottom: 15px;
`;

const Description = styled.Text`
  color: #697295;
  font-size: 14px;
  margin-bottom: 25px;
`;

const InputView = styled.View`
  align-items: center;
  margin-bottom: 25px;
`;

const InputField = styled.TextInput`
  width: 100%;
  height: 51px;
  background: #191b23;
  border-radius: 10px;
  justify-content: center;
  padding-left: 16px;
  color: #697295;
  font-size: 14px;
`;

const SignInView = styled.View``;
