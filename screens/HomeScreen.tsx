import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Logo, SignOutIcon } from "../components/Icons";
import { Space } from "../components/Space";
import { Space2 } from "../components/Space2";
import { HomeProps } from "../StackNavigatorTypes";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { RootState } from "../slices/rootReducer";
import { signOut } from "../slices/authReducer";
import AddOption from "../components/AddOption";
import { AddSpaceModal } from "../components/AddSpaceModal";
import {
  onAddPress,
  onCreatePress,
  onJoinPress,
  onClosePress,
} from "../slices/addSpaceReducer";

let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

export function HomeScreen({ navigation, route }: HomeProps) {
  const firebase = useFirebase();
  const db = useFirestore();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const { optionShow, createShow, joinShow } = useSelector(
    (state: RootState) => state.addSpace
  );
  const userID = firebase.auth().currentUser?.uid;


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
            console.log(firstName);
          }
        } else {
          console.log("No document");
        }

        await db
          .collection("users")
          .doc(userID)
          .collection("rooms")
          .add({
            roomName: firstName + "'s Room",
            roomId: 12345678910,
            inviteCode: 123,
            host: firstName,
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

  const getUserName = async () => {
    try {
      const doc = await db.collection("users").doc(userID).get();
      const data = doc.data();
      if (data != undefined) {
        const name = data.firstName;
        setFirstName(name);
      }
    } catch (error) {
      console.log("In HomeScreen.tsx:", error);
    }
  };

  // On ComponentDidMount, get user's name and their spaces
  useEffect(() => {
    getUserName();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <TopContainer>
        <TitleBar style={{ marginTop: safeMargin, marginBottom: 57 }}>
          <IconBar>
            <Logo />
            <TouchableOpacity onPress={() => dispatch(signOut())}>
              <SignOutIcon style={{ marginTop: 20 }} />
            </TouchableOpacity>
          </IconBar>
          <WelcomeView>
            <WelcomeText>Welcome back, </WelcomeText>
            <Name>{firstName}</Name>
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

      {/* Main control logic for add space options upon clicking add button*/}
      {
        /* Renders create and join option buttons if true */
        optionShow ? (
          <>
            <TouchableWithoutFeedback onPress={() => dispatch(onAddPress())}>
              <AddOptionContainer
                style={{
                  opacity: optionShow ? 1 : 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <AddOption
                  id="create"
                  title="Create a space"
                  desc="Just for your friendos"
                />
                <AddOption
                  id="join"
                  title="Join a space"
                  desc="Just for your friendos"
                />
              </AddOptionContainer>
            </TouchableWithoutFeedback>
          </>
        ) : /* Renders create modal if true */
        createShow ? (
          <>
            <TouchableWithoutFeedback onPress={() => dispatch(onClosePress())}>
              <AddOptionContainer style={{ opacity: createShow ? 1 : 0 }}>
                <AddSpaceModal
                  title="Create a space"
                  description="Creating a space allows you to be in control of the music queue and open your space to other users."
                  inputField="Space Name"
                  buttonName="Create Space"
                  userID={userID!}
                />
              </AddOptionContainer>
            </TouchableWithoutFeedback>
          </>
        ) : /* Renders join modal if true */
        joinShow ? (
          <>
            <TouchableWithoutFeedback onPress={() => dispatch(onClosePress())}>
              <AddOptionContainer style={{ opacity: joinShow ? 1 : 0 }}>
                <AddSpaceModal
                  title="Join a space"
                  description="Joining a space allows you to queue songs to the particular space. Ask a host for an invite code."
                  inputField="Space Name"
                  buttonName="Join Space"
                  userID={userID!}
                />
              </AddOptionContainer>
            </TouchableWithoutFeedback>
          </>
        ) : null
      }
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
  justify-content: flex-end;
`;
