import * as React from "react";
import styled from "styled-components/native";

class SearchScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Title>Hi, this is the search screen</Title>
      </Container>
    );
  }
}

export default SearchScreen;

const Container = styled.View`
  background: #191b23;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: #ffffff;
`;
