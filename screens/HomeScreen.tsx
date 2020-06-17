import * as React from "react";
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { Logo, ProfileIcon, AddButton } from "../components/Icons";
import { Space } from "../components/Space";
import { Space2 } from "../components/Space2";

let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

export function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <ScrollView>
        <Container>
          <TitleBar style={{ marginTop: safeMargin, marginBottom: 57 }}>
            <IconBar>
              <Logo />
              <TouchableOpacity>
                <ProfileIcon style={{ marginTop: 20 }} />
              </TouchableOpacity>
            </IconBar>
            <WelcomeView>
              <WelcomeText>Welcome back, </WelcomeText>
              <Name>Arif</Name>
            </WelcomeView>
          </TitleBar>
          <TouchableOpacity>
            <Space
              num="01"
              spaceName="Josiah's Car"
              spacePattern={require("../assets/spacePattern.png")}
            />
          </TouchableOpacity>
        </Container>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 20 }}
        >
          <SpaceContainer>
            <TouchableOpacity>
              <Space2
                color="#FFCF73"
                num="02"
                spaceName="George's Stinky Room"
                spacePattern={require("../assets/spacePattern.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Space2
                color="#A9BAFF"
                num="03"
                spaceName="Eli's Headphones"
                spacePattern={require("../assets/spacePattern.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Space2
                color="#BB9BFF"
                num="04"
                spaceName="Nibro's Playlist"
                spacePattern={require("../assets/spacePattern.png")}
              />
            </TouchableOpacity>
          </SpaceContainer>
        </ScrollView>
        <ButtonContainer>
          <TouchableOpacity>
            <AddButton />
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const Container = styled.View`
  background: #191b23;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const TitleBar = styled.View``;

const IconBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WelcomeView = styled.Text`
  margin-top: -10px;
  font-weight: 700;
  font-size: 17px;
`;

const WelcomeText = styled.Text`
  color: rgba(255, 255, 255, 0.5);
`;

const Name = styled.Text`
  color: #e08700;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 50px;
`;

const SpaceContainer = styled.View`
  flex-direction: row;
  /* padding-left: 20px; */
  padding-right: 13px;
`;
