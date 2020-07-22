import * as React from "react";
import styled from "styled-components/native";
import { PlayerProps } from "../StackNavigatorTypes";
import { BackIcon, GearIcon, PauseIcon, PlayIcon, RepeatIcon, SkipBackIcon, SkipForwardIcon } from "../components/Icons";
import { Dimensions, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import { Slider } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootState } from "../slices/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeTimecode,
  onPlayPress
} from "../slices/playerReducer";

let safeMargin: number;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

function PlayMusic(props: any): any {
  const isPlaying = props.isPlaying;
  if (isPlaying) {
    return <PauseIcon />;
  } else {
    return <PlayIcon />;
  }
}

function PlayerScreen({ navigation, route }: PlayerProps) {
  const { isPlaying, currentTimecode } = useSelector(
    (state: RootState) => state.player
  );
  const dispatch = useDispatch();

  const image = {
    uri:
      "https://consequenceofsound.net/wp-content/uploads/2019/01/hozier-wasteland-baby-cover-album-artwork.jpg?quality=80",
  };
  const roomName = "Josiah's Car";
  const songName = "Almost (Sweet Music)";
  const artistName = "Hozier";
  const songLength = 217;

  const formatTimecode = (totalSeconds: number) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let timecode = `${String(minutes)}:`;
    if (seconds < 10) timecode = timecode + `0${String(seconds)}`;
    else timecode = timecode + String(seconds)
    return timecode;
  }

  const onExitPlayer = () => {
    navigation.goBack();
  };

  return (
    <FullScreenContainer>
      <BGImage source={image}>
        <LinearGradient
          colors={['rgba(36, 39, 51, .2)', 'rgba(36, 39, 51, 1)']}
          start={[.5, 0]}
          end={[.5, .8]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: screenHeight,
          }}
        />
        <InnerContainer>
          <IconBar style={{ marginTop: safeMargin }}>
            <TouchableOpacity onPress={() => onExitPlayer()}>
              <BackIcon />
            </TouchableOpacity>
            <RoomName>{roomName}</RoomName>
            <TouchableOpacity onPress={() => console.log("Pressed Settings.")}>
              <GearIcon />
            </TouchableOpacity>
          </IconBar>
          <StyledView style={{ marginBottom: 35 }}>
            <TrackInfo>
              <SongName>{songName}</SongName>
              <ArtistName>{artistName}</ArtistName>
            </TrackInfo>
            <Slider
              style={{ marginBottom: 5 }}
              thumbTintColor={"#E08700"}
              minimumValue={0}
              maximumValue={songLength}
              minimumTrackTintColor="#E08700"
              maximumTrackTintColor="#5A5C64"
              onValueChange={(value: number) => {
                dispatch(onChangeTimecode({ timecode: value }));
              }}
            />
            <Timecodes>
              <Text style={{ color: '#ddd' }}>{formatTimecode(currentTimecode)}</Text>
              <Text style={{ color: '#ddd' }}>{formatTimecode(songLength)}</Text>
            </Timecodes>
            <IconBar style={{ marginLeft: 15, marginRight: 15 }}>
              <StyledView style={{ width: 24, height: 24 }} />
              <StyledView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => console.log("Pressed Last Song.")}
                >
                  <SkipBackIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ paddingLeft: 24, paddingRight: 24 }}
                  onPress={() => {
                    dispatch(onPlayPress());
                    console.log("isPlaying: " + String(isPlaying));
                  }}
                >
                  <PlayMusic isPlaying={isPlaying} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log("Pressed Next Song.")}
                >
                  <SkipForwardIcon />
                </TouchableOpacity>
              </StyledView>
              <TouchableOpacity
                onPress={() => console.log("Pressed Loop Song.")}
              >
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
  justify-content: flex-start;
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
  justify-content: space-between;
`;

const RoomName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const SongName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

const ArtistName = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
`;

const IconBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledView = styled.View``;

const TrackInfo = styled.View`
  marginLeft: 10px;
`;

const Timecodes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
`;
