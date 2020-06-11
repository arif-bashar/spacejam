import * as React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
        <WelcomeBackground
          source={require("../assets/welcomeBackground.png")}
          resizeMode="cover"
        />
      </SafeAreaView>
    );
  }
}

const WelcomeBackground = styled.Image`
  width: 100%;
  height: 100%;
`;

export default WelcomeScreen;
