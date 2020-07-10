import React, { useEffect, useState } from "react";
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
import { Logo, ProfileIcon, AddButton } from "../components/Icons";
import { Space } from "../components/Space";
import { Space2 } from "../components/Space2";
import { HomeProps } from "../StackNavigatorTypes";
import firebase from "../components/Firebase";
import { RootState } from "../slices/rootReducer";
import { signOutAction } from "../slices/authReducer";

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
  //const { userID } = useSelector((state: RootState) => state.auth);
  //console.log(userID);
  
  const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  // under construction
  const addRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        let user = db.collection("users").doc(userID).collection("rooms").doc("Dma59lD2obvJvjpyQ9xC");
        const doc = await user.get();
        if(doc.exists){
          console.log(doc.data());
          let data = doc.data();
          if(data != undefined){
          //  firstName = data.firstName;
            console.log(userName);
          }
        } else {
          console.log("No document");
        }
        
        await db.collection("users").doc(userID).collection("rooms").add({
          roomName: userName+"'s Room",
          roomId: 12345678910,
          inviteCode: 123,
          host: userName,
        })
      }
    }catch(error) {
      console.log("Error getting document: ", error);
    };
  };

  const deleteRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID"); 
      if (userID != null) {
        await db.collection("users").doc(userID).collection("rooms").doc("Dma59lD2obvJvjpyQ9xC").delete();
      }
    }catch(error) {
      console.log("Error deleting document: ", error);
    }
  };

  const updateRoom = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        await db.collection("users").doc(userID).collection("rooms").doc("D7YrJK82c3cIoJzVFhZ3").update({
          roomName: "Arif's Car"
        })
      }
    }catch(error) {
      console.log("Error updating document: ", error);
    }
  };

  const getRooms = async () => {
    try {
      const userID = await AsyncStorage.getItem("userID");
      if (userID != null) {
        const doc = await db.collection("users").doc(userID).collection("rooms").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
          })
        })
      }
    }catch(error) {
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
      <ScrollView>
        <Container>
          <TitleBar style={{ marginTop: safeMargin, marginBottom: 57 }}>
            <IconBar>
              <Logo />
              <TouchableOpacity onPress={() => onSignOut()}>
                <ProfileIcon style={{ marginTop: 20 }} />
              </TouchableOpacity>
            </IconBar>
            <WelcomeView>
              <WelcomeText>Welcome back, </WelcomeText>
              <Name>{userName}</Name>
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
          <TouchableOpacity onPress={() => getRooms()} >
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
