import * as React from "react";
import styled from "styled-components/native";
import { PlayerProps } from "../StackNavigatorTypes";
import { BackIcon, GearIcon, PauseIcon, PlayIcon, RepeatIcon, SkipBackIcon, SkipForwardIcon } from "../components/Icons";
import { Platform, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { Slider } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { onAddPress } from "../slices/addSpaceReducer";
import { RootState } from "../slices/rootReducer";

let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

function PlayMusic(props: any): any {
  const isPlaying = props.isPlaying;
  if (isPlaying) {
    return <PauseIcon />
  }
  else {
    return <PlayIcon />
  }
}

function PlayerScreen({ navigation, route }: PlayerProps) {
  const image = { uri: 'https://consequenceofsound.net/wp-content/uploads/2019/01/hozier-wasteland-baby-cover-album-artwork.jpg?quality=80' };
  const roomName = "Josiah's Car";
  const songName = "Almost (Sweet Music)"
  const artistName = "Hozier";
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootState) => state.addSpace);
  let isPlaying = false;

  const onExitPlayer = () => {
    dispatch(onAddPress());
    navigation.navigate('Home');
    // startAnimation.setValue(0);
  };

  return (
    <FullScreenContainer>
      <BGImage source={image}>
        <InnerContainer>
          <IconBar style={{ marginTop: safeMargin }}>
            <TouchableOpacity onPress={() => onExitPlayer()}>
              <BackIcon />
            </TouchableOpacity>
            <RoomName>{roomName}</RoomName>
            <TouchableOpacity onPress={() => console.log('Pressed Settings.')}>
              <GearIcon />
            </TouchableOpacity>
          </IconBar>
          <StyledView style={{ marginBottom: 40 }}>
            <TrackInfo>
              <SongName>{songName}</SongName>
              <ArtistName>{artistName}</ArtistName>
            </TrackInfo>
            <Slider style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000" />
            <IconBar>
              <StyledView style={{ width: 24, height: 24 }} />
              <StyledView style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => console.log('Pressed Last Song.')}>
                  <SkipBackIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 24, paddingRight: 24 }} onPress={() => { isPlaying = !isPlaying; console.log('isPlaying: ' + String(isPlaying)); }}>
                  <PlayMusic isPlaying={isPlaying} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Pressed Next Song.')}>
                  <SkipForwardIcon />
                </TouchableOpacity>
              </StyledView>
              <TouchableOpacity onPress={() => console.log('Pressed Loop Song.')}>
                <RepeatIcon />
              </TouchableOpacity>
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

const RoomName = styled.Text`
  color: #fff;
  font-weight: bold;
  fontSize: 18px;
`;

const SongName = styled.Text`
  color: #fff;
  font-weight: bold;
  fontSize: 20px;
`;

const ArtistName = styled.Text`
color: #fff;
fontSize: 16px;
`;

const IconBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.Button``;

const StyledView = styled.View``;

const TrackInfo = styled.View`
  marginBottom: 20px;
`;