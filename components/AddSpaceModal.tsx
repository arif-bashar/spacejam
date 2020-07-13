import * as React from "react";
import styled from "styled-components/native";
import { useState } from "react";
import { SignButton } from "../components/SignButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { XIcon } from "../components/Icons";

type Field = {
  title: string;
  description: string;
  inputField: string;
  buttonName: string;
};

export const AddSpaceModal: React.FC<Field> = (props) => {
  const [roomName, setRoomName] = useState("");

  return (
    <Container>
      <XView>
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
  background: #2B2F3E; 
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const XView = styled.View`
  position: absolute;
  top: 13px;
  right: 18px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 20px;
`;

const Description = styled.Text`
  color: #697295;
  font-size: 14px;
`;

const SignInView = styled.View`
  margin-top: 33px;
  padding-left: 15px;
  padding-right: 15px;
`;

const InputView = styled.View`
  align-items: center;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const InputField = styled.TextInput`
  width: 100%;
  height: 51px;
  background: #191B23;
  border-radius: 10px;
  justify-content: center;
  padding-left: 16px;
  color: #697295;
  font-size: 14px;
`;