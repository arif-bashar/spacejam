import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { BackIcon } from "../components/Icons";
import { SignButton } from "../components/SignButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SignInProps } from "../StackNavigatorTypes";
import firebase from "../components/Firebase";
import { signInAction } from "../slices/authReducer";
import { RootState } from "../slices/rootReducer";

function SignInScreen({ navigation }: SignInProps) {
  const db = firebase.firestore();

  // Redux dispatcher and selection from state
  const dispatch = useDispatch();

  // Grabs email and pass fields from input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    try {
      const credentials = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const token = await credentials.user?.getIdToken();
      const id = credentials.user?.uid;

      if (token != undefined && id != undefined) {
        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userID", id);
        console.log(
          "In SignInScreen, token & id is saved in storage and is",
          id
        );
        dispatch(signInAction({ userToken: token, userID: id }));
      }
    } catch (error) {
      if (error.message) Alert.alert("Error", error.message);
      else console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <Container>
        <BackView
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon />
        </BackView>

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
          <TouchableOpacity onPress={() => onSignIn()}>
            <SignButton title="Sign In" />
          </TouchableOpacity>
        </SignInView>
      </Container>
    </SafeAreaView>
  );
}

export default SignInScreen;

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

const BackView = styled.TouchableOpacity`
  width: ${wp("20%")}px;
  height: ${hp("3%")}px;
  margin-top: 43px;
  margin-left: 18px;
  flex-direction: row;
  align-items: center;
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
