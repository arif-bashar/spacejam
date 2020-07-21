import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import { Logo, SignOutIcon } from "../components/Icons";
import { Space } from "../components/Space";
import { Space2 } from "../components/Space2";
import { HomeProps } from "../StackNavigatorTypes";
import firebase from "../components/Firebase";
import { RootState } from "../slices/rootReducer";
import { signOutAction } from "../slices/authReducer";
import { AddSpaceModal } from "../components/AddSpaceModal";
import AddOption from "../components/AddOption";
import { onAddPress } from "../slices/addSpaceReducer";
import { BlurView } from "expo-blur";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

export function HomeScreen({ navigation, route }: HomeProps) {
  const db = firebase.firestore();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const { optionShow } = useSelector((state: RootState) => state.addSpace);

  //const { userID } = useSelector((state: RootState) => state.auth);
  //console.log(userID);

  const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  // under construction
  const addRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        let user = db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .doc("Dma59lD2obvJvjpyQ9xC");
        const doc = await user.get();
        if (doc.exists) {
          console.log(doc.data());
          let data = doc.data();
          if (data != undefined) {
            //  firstName = data.firstName;
            console.log(userName);
          }
        } else {
          console.log("No document");
        }

        await db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .add({
            roomName: userName + "'s Room",
            roomId: 12345678910,
            inviteCode: 123,
            host: userName,
          });
      }
    } catch (error) {
      console.log("Error getting document: ", error);
    }
  };

  const deleteRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        await db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .doc("Dma59lD2obvJvjpyQ9xC")
          .delete();
      }
    } catch (error) {
      console.log("Error deleting document: ", error);
    }
  };

  const updateRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        await db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .doc("D7YrJK82c3cIoJzVFhZ3")
          .update({
            roomName: "Arif's Car",
          });
      }
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  const getRooms = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        const doc = await db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());
            });
          });
      }
    } catch (error) {
      console.log("Error getting rooms: ", error);
    }
  };

  useEffect(() => {
    const getUserName = async () => {
      const id = await AsyncStorage.getItem("userID");
      if (id != null) {
        const doc = await db.collection("users").doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          if (data != undefined) {
            setUserName(data.firstName);
          }
        }
      }
    };

    getUserName();
  }, []);

  const onSignOut = async () => {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userID");
      dispatch(signOutAction());
    } catch (error) {
      console.log("Unable to remove user's name and token", error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <TopContainer>
        <TitleBar style={{ marginTop: safeMargin, marginBottom: 57 }}>
          <IconBar>
            <Logo />
            <TouchableOpacity onPress={() => onSignOut()}>
              <SignOutIcon style={{ marginTop: 20 }} />
            </TouchableOpacity>
          </IconBar>
          <WelcomeView>
            <WelcomeText>Welcome back, </WelcomeText>
            <Name>{userName}</Name>
          </WelcomeView>
        </TitleBar>
      </TopContainer>

      <SpaceContainer>
        <Space
          num="01"
          spaceName="Josiah's Car"
          spacePattern={require("../assets/spacePattern.png")}
        />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <SpaceScrollContainer>
            <Space2
              color="#FFCF73"
              num="02"
              spaceName="George's Stinky Room"
              spacePattern={require("../assets/spacePattern.png")}
            />
            <Space2
              color="#A9BAFF"
              num="03"
              spaceName="Eli's Headphones"
              spacePattern={require("../assets/spacePattern.png")}
            />
            <Space2
              color="#BB9BFF"
              num="04"
              spaceName="Nibro's Playlist"
              spacePattern={require("../assets/spacePattern.png")}
            />
          </SpaceScrollContainer>
        </ScrollView>
      </SpaceContainer>

      {/* Control logic for add space options upon clicking add button */}
      {optionShow ? (
        <>
          <AddOptionContainer style={{ opacity: optionShow ? 1 : 0 }}>
            <TouchableWithoutFeedback
              style={{
                position: "relative",
                justifyContent: "flex-end",
                width: "100%",
                height: "100%",
                paddingLeft: 20,
                paddingRight: 20,
                opacity: optionShow ? 1 : 0,
              }}
              onPress={() => dispatch(onAddPress())}
            >
              <AddOption title="Create a space" desc="Just for your friendos" />
              <AddOption title="Join a space" desc="Just for your friendos" />
            </TouchableWithoutFeedback>
          </AddOptionContainer>
        </>
      ) : null}

      {/* <ModalContainer>
        <AddSpaceModal
          title="Create a space"
          description="Creating a space allows you to be in control of the music queue and open your space to other users."
          inputField="Space Name"
          buttonName="Create Space"
        />
      </ModalContainer> */}
    </SafeAreaView>
  );
}

const TopContainer = styled.View`
  background: #191b23;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const ModalContainer = styled.View`
  width: 100%;
  height: 25%;
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

const SpaceContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const SpaceScrollContainer = styled.View`
  flex-direction: row;
  height: 240px;
`;

const AddOptionContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(25, 27, 35, 0.8);
`;
