import * as React from "react";
import styled from "styled-components/native";

class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Title>Hi, this is the splash screen</Title>
      </Container>
    );
  }
}

export default SplashScreen;

const Container = styled.View`
  background: #191b23;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: #ffffff;
`;
