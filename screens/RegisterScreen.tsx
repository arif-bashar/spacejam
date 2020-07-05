import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import styled from "styled-components/native";
import { SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { BackIcon } from "../components/Icons";
import { SignButton } from "../components/SignButton";
import { RegisterProps } from "../StackNavigatorTypes";
import firebase from "../components/Firebase";
import { RootState } from "../slices/rootReducer";
import { signInAction } from "../slices/authReducer";

function RegisterScreen({ navigation }: RegisterProps) {
  const db = firebase.firestore();

  // Redux dispatcher and selection from state
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const onRegister = async () => {
    try {
      const credentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const id = credentials.user?.uid;
      const token = await credentials.user?.getIdToken();

      if (token != undefined && id != undefined) {
        await db.collection("users").doc(id).set({
          email: email,
          firstName: firstName,
          lastName: lastName,
        });

        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userID", id);
        console.log(
          "In RegisterScreen, token is saved in storage and is",
          token
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
          <InputField
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#697295"
          />
        </InputView>
        <FirstLastView>
          <LeftInputField
            onChangeText={(firstName) => setFirstName(firstName)}
            placeholder="First Name"
            placeholderTextColor="#697295"
          />
          <RightInputField
            onChangeText={(lastName) => setLastName(lastName)}
            placeholder="Last Name"
            placeholderTextColor="#697295"
          />
        </FirstLastView>
        <InputView>
          <InputField
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#697295"
          />
        </InputView>
        <InputView>
          <InputField
            onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#697295"
          />
        </InputView>
        <TouchableOpacity onPress={() => onRegister()}>
          <SignInView>
            <SignButton title="Register" />
          </SignInView>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
}

export default RegisterScreen;

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
  margin-top: 27px;
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

const FirstLastView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const LeftInputField = styled.TextInput`
  width: 49%;
  height: 51px;
  background: #2b2f3e;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  padding-left: 16px;
  color: #697295;
`;

const RightInputField = styled.TextInput`
  width: 49%;
  height: 51px;
  background: #2b2f3e;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  padding-left: 16px;
  color: #697295;
`;

const SignInView = styled.View`
  margin-top: 33px;
  padding-left: 15px;
  padding-right: 15px;
`;
