import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Alert } from "react-native";
import { BackIcon } from "../components/Icons";
import { SignButton } from "../components/SignButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../AuthParamList";
import firebase from "../components/Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  addPassword,
  inputEmail,
  inputPassword,
} from "../store/reducers/signInReducer";

export function SignInScreen({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Sign In">;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <Container>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <BackView>
            <BackIcon />
            <BackText>Back</BackText>
          </BackView>
        </TouchableOpacity>
        <GreetingView>
          <Title>Yay, you're back!</Title>
          <Subtitle>Sign in with your credentials and start jamming</Subtitle>
        </GreetingView>
        <Creds>SPACEJAM CREDENTIALS</Creds>
        <InputView>
          <InputField
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#697295"
          />
        </InputView>
        <InputView>
          <InputField
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#697295"
          />
        </InputView>
        <ForgotP>Forgot your password?</ForgotP>
        <SignInView>
          <TouchableOpacity
            onPress={() => {
              onSignIn();
            }}
          >
            <SignButton title="Sign In" />
          </TouchableOpacity>
        </SignInView>
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

const InputField = styled.TextInput`
  width: 100%;
  height: 51px;
  background: #2b2f3e;
  border-radius: 10px;
  justify-content: center;
  padding-left: 16px;
  color: #697295;
  font-size: 14px;
`;

const ForgotP = styled.Text`
  color: #e08700;
  font-size: 10px;
  margin-left: 17px;
  margin-bottom: 24px;
`;

const SignInView = styled.View`
  padding-left: 15px;
  padding-right: 15px;
`;
