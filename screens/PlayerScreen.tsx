import * as React from "react";
import styled from "styled-components/native";
import { PlayerProps } from "../StackNavigatorTypes";
import { Text, Button, ImageBackground } from "react-native";

function PlayerScreen({ navigation, route }: PlayerProps) {
  const image = { uri: 'https://consequenceofsound.net/wp-content/uploads/2019/01/hozier-wasteland-baby-cover-album-artwork.jpg?quality=80' };
  const roomName = "Josiah's Car";
  const songName = "Almost (Sweet Music)"
  const artistName = "Hozier";


  return (
    <FullScreenContainer>
      <BGImage source={image}>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Text>{roomName}</Text>
        <Text>{songName}</Text>
        <Text>{artistName}</Text>
      </BGImage>
    </FullScreenContainer>
  );
}

export default PlayerScreen;

const BGImage = styled.ImageBackground`
    flex: 1;
    resizeMode: cover;
    justifyContent: center;
`;

const FullScreenContainer = styled.View`
  background: #191b23;
  flex: 1;
  flex-direction: column;
`;
const Title = styled.Text`
  color: #ffffff;
`;
