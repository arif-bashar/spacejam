import * as React from "react";
import styled from "styled-components/native";
import { PlayerProps } from "../StackNavigatorTypes";
import { BackIcon, NextIcon } from "../components/Icons";
import { Platform, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";

let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

function PlayerScreen({ navigation, route }: PlayerProps) {
  const image = { uri: 'https://consequenceofsound.net/wp-content/uploads/2019/01/hozier-wasteland-baby-cover-album-artwork.jpg?quality=80' };
  const roomName = "Josiah's Car";
  const songName = "Almost (Sweet Music)"
  const artistName = "Hozier";


  return (
    <FullScreenContainer>
      <BGImage source={image}>
        <InnerContainer>
          <IconBar style={{ marginTop: safeMargin }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <BackIcon />
            </TouchableOpacity>
            <Title>{roomName}</Title>
            <StyledButton title="Settings" onPress={() => console.log('Pressed Settings.')} />
          </IconBar>
          <StyledView style={{ marginBottom: 40 }}>
            <TrackInfo>
              <Title>{songName}</Title>
              <Title>{artistName}</Title>
            </TrackInfo>
            <IconBar>
              <StyledButton title="Last Song" onPress={() => console.log('Pressed Last Song.')} />
              <StyledButton title="Play" onPress={() => console.log('Pressed Play.')} />
              <StyledButton title="Next Song" onPress={() => console.log('Pressed Next Song.')} />
              <StyledButton title="Loop Song" onPress={() => console.log('Pressed Loop Song.')} />
            </IconBar>
          </StyledView>
        </InnerContainer>
      </BGImage>
    </FullScreenContainer>
  );
}

export default PlayerScreen;

const BGImage = styled.ImageBackground`
    flex: 1;
    resizeMode: cover;
    justifyContent: flex-start;
    align-items: center;
`;

const FullScreenContainer = styled.SafeAreaView`
  background: #191b23;
  flex: 1;
  flex-direction: column;
`;

const InnerContainer = styled.SafeAreaView`
  width: 90%;
  flex: 1;
  flex-direction: column;
  justifyContent: space-between;
`;

const Title = styled.Text`
  color: #ffffff;
`;

const IconBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.Button``;

const StyledView = styled.View``;

const TrackInfo = styled.View`
  marginBottom: 20;
`;