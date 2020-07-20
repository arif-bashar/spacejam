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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Logo, SignOutIcon } from "../components/Icons";
import { Space } from "../components/Space";
import { Space2 } from "../components/Space2";
import { HomeProps, HomeBaseProps } from "../StackNavigatorTypes";
import firebase from "../components/Firebase";
import { RootState } from "../slices/rootReducer";
import { signOutAction } from "../slices/authReducer";
import { AddSpaceModal } from "../components/AddSpaceModal";
import AddOption from "../components/AddOption";
import { onAddPress } from "../slices/addSpaceReducer";
import { StackParams } from "../StackNavigatorTypes";
import PlayerScreen from "./PlayerScreen";
import { BlurView } from "expo-blur";

const Stack = createStackNavigator<StackParams>();
let safeMargin: number;

StatusBar.setBarStyle("light-content");

if (Platform.OS == "ios") {
  safeMargin = 0;
} else if ((Platform.OS = "android")) {
  safeMargin = 40;
}

function HomeBase({ navigation, route }: HomeBaseProps) {
  const db = firebase.firestore();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const { show } = useSelector((state: RootState) => state.addSpace);

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

  const onEnterPlayer = () => {
    dispatch(onAddPress());
    navigation.navigate('Player');
    // startAnimation.setValue(0);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#191b23", flex: 1 }}>
      <Container>
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
        <TouchableOpacity onPress={() => onEnterPlayer()}>
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
        style={{
          marginLeft: 20,
          flexGrow: 0,
        }}
      >
        <SpaceContainer>
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
        </SpaceContainer>
      </ScrollView>
      {/* <AddOptionContainer
        style={{ opacity: show ? 0 : 1, zIndex: show ? -1 : 1 }}
      >
        <BlurView intensity={show ? 0 : 100}>
          <AddOption title="Create a space" desc="Just for your friendos" />
          <AddOption title="Join a space" desc="Just for your friendos" />
        </BlurView>
      </AddOptionContainer> */}

      <BlurView
        intensity={show ? 0 : 100}
        tint="dark"
        style={{
          opacity: show ? 0 : 1,
          zIndex: show ? -1 : 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          paddingTop: Dimensions.get("window").height - 300,
          paddingLeft: 20,
          paddingRight: 20,
          // backgroundColor: "rgba(25, 27, 35, 0.8)",
        }}
      >
        <AddOption title="Create a space" desc="Just for your friendos" />
        <AddOption title="Join a space" desc="Just for your friendos" />
      </BlurView>

      {/* <ModalContainer>
        <AddSpaceModal
          title="Create a space"
          description="Creating a space allows you to be in control of the music queue and open your space to other users."
          inputField="Space Name"
          buttonName="Create Space"
        />
      </ModalContainer> */}
    </SafeAreaView >
  );
}

export function HomeScreen({ navigation, route }: HomeProps) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeBase} />
        <Stack.Screen name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Container = styled.View`
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
  flex-direction: row;
  height: 240px;
  padding-right: 13px;
`;

const AddOptionContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  /* bottom: 50px; */
  padding-top: ${Dimensions.get("window").height - 300}px;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(25, 27, 35, 0.8);
`;
