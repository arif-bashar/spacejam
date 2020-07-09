import * as React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { SignButton } from "../components/SignButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
// import { AuthParamList } from "../AuthParamList";
import firebase from "../components/Firebase";
import { WelcomeProps } from "../StackNavigatorTypes";

let safeMargin: number;

if (Platform.OS == "ios") {
  safeMargin = 65;
} else if ((Platform.OS = "android")) {
  safeMargin = 0;
}

function WelcomeScreen({ navigation, route }: WelcomeProps) {
  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <ArtifactView>
        <GridArtifacts
          source={require("../assets/xgrid-artifacts.png")}
          resizeMode="contain"
        />
      </ArtifactView>
      <LogoView style={{ marginTop: safeMargin, marginBottom: 450 }}>
        <Logo
          source={require("../assets/welcome-logo.png")}
          resizeMode="contain"
        />
      </LogoView>
      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
          navigation.navigate("SignIn");
        }}
      >
        <ButtonContainer>
          <SignButton title="Sign In" />
        </ButtonContainer>
      </TouchableOpacity>
      <RegisterView>
        <Context>Don't have an account?</Context>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <RegisterText>Register</RegisterText>
        </TouchableOpacity>
      </RegisterView>
      <ShapeView>
        <ShapeArtifacts source={require("../assets/shape-artifacts.png")} />
      </ShapeView>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const ArtifactView = styled.View`
  flex: 1;
  position: absolute;
  top: 45px;
`;

const GridArtifacts = styled.Image`
  width: 340px;
  height: 477px;
  opacity: 0.5;
`;

const LogoView = styled.View`
  position: absolute;
  align-items: center;
  top: 65px;
  width: 100%;
  height: 94px;
`;

const Logo = styled.Image`
  width: 208px;
  height: 94px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 55px;
  padding-left: 15px;
  padding-right: 15px;
  /* margin-top: 450px; */
  z-index: 1;
  background: white;
`;

const ShapeView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 65px;
  position: absolute;
  bottom: 5px;
  z-index: -1;
`;

const ShapeArtifacts = styled.Image`
  width: 466px;
  height: 251px;
  opacity: 0.4;
`;

const RegisterView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  z-index: 1;
`;

const Context = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

const RegisterText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #e08700;
`;
