import * as React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { SignButton } from "../components/SignButton";

let safeMargin: number;

if (Platform.OS == "ios") {
  safeMargin = 65;
} else if ((Platform.OS = "android")) {
  safeMargin = 110;
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
        <ArtifactView>
          <GridArtifacts
            source={require("../assets/xgrid-artifacts.png")}
            resizeMode="contain"
          />
        </ArtifactView>
        <LogoView style={{ marginTop: safeMargin }}>
          <Logo
            source={require("../assets/welcome-logo.png")}
            resizeMode="contain"
          />
        </LogoView>
        <ButtonContainer>
          <SignButton title="Sign In" />
        </ButtonContainer>
        <ShapeView>
          <ShapeArtifacts source={require("../assets/shape-artifacts.png")} />
        </ShapeView>
      </SafeAreaView>
    );
  }
}

const ButtonContainer = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 300px;
  z-index: 1;
`;
const ArtifactView = styled.View`
  flex: 1;
  position: absolute;
  top: 45px;
`;

const GridArtifacts = styled.Image`
  width: 340px;
  height: 477px;
`;

const LogoView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 65px;
`;

const Logo = styled.Image`
  width: 208px;
  height: 94px;
`;

const ShapeView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 65px;
  position: absolute;
  bottom: 5px;
`;

const ShapeArtifacts = styled.Image`
  width: 466px;
  height: 251px;
`;

export default WelcomeScreen;
