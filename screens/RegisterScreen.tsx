import * as React from "react";
import styled from "styled-components/native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { BackIcon } from "../components/Icons";
import { InputField } from "../components/InputField";
import { SignButton } from "../components/SignButton";
import { LeftInputField } from "../components/LeftInputField";
import { RightInputField } from "../components/RightInputField";
import { NavigationProp } from "@react-navigation/native";
import { AuthParamList } from "../AuthParamList";

export function RegisterScreen({
  navigation,
}: {
  navigation: NavigationProp<AuthParamList, "Register">;
}) {
  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <Container>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackView>
            <BackIcon />
            <BackText>Back</BackText>
          </BackView>
        </TouchableOpacity>
        <GreetingView>
          <Title>Make your account!</Title>
          <Subtitle>Register with your credentials and start jamming</Subtitle>
        </GreetingView>
        <Creds>SPACEJAM CREDENTIALS</Creds>
        <InputView>
          <InputField field="Email / Phone" />
        </InputView>
        <FirstLastView>
          <LeftInputField field="First Name" />
          <RightInputField field="Last Name" />
        </FirstLastView>
        <InputView>
          <InputField field="Password" />
        </InputView>
        <InputView>
          <InputField field="Confirm Password" />
        </InputView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <SignInView>
            <SignButton title="Register" />
          </SignInView>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  background: #191b23;
  flex: 1;
  flex-direction: column;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 15px;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.32);
`;

const GreetingView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 51px;
`;

const BackView = styled.View`
  margin-top: 43px;
  margin-left: 9px;
  flex-direction: row;
  align-items: center;
`;

const BackText = styled.Text`
  color: #ffffff;
  margin-left: 3px;
`;

const Creds = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  font-weight: 800;
  margin-top: 54px;
  margin-left: 17px;
  margin-bottom: 15px;
`;

const InputView = styled.View`
  align-items: center;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SignInView = styled.View`
  margin-top: 33px;
  padding-left: 15px;
  padding-right: 15px;
`;

const FirstLastView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;
