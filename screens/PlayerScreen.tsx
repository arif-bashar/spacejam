import * as React from "react";
import styled from "styled-components/native";
import { PlayerProps } from "../StackNavigatorTypes";
import { Button } from "react-native";

function PlayerScreen({ navigation, route }: PlayerProps) {
    return (
        <Container>
            <Title>Hi, this is the music player screen</Title>
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('Home')}
            />
        </Container>
    );
}

export default PlayerScreen;

const Container = styled.View`
  background: #191b23;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: #ffffff;
`;
