import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { HomeIcon, SearchIcon } from "./components/Icons";
import HomeTabs from "./components/HomeTabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { StackParams } from "./StackNavigatorTypes";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "./components/Firebase";
import { getTokenAction } from "./slices/authReducer";
import { RootState } from "./slices/rootReducer";
import SplashScreen from "./screens/SplashScreen";
import TabAddButton from "./components/TabAddButton";
import { View, Dimensions } from "react-native";

const Stack = createStackNavigator<StackParams>();

export default function App() {
  const db = firebase.firestore();
  let userName;
  let userID;

  const dispatch = useDispatch();
  const { userToken, isSignOut } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    console.log("Getting token in App.tsx");
    const getUserToken = async () => {
      let token;
      let id;

      try {
        token = await AsyncStorage.getItem("userToken");
        id = await AsyncStorage.getItem("userID");
      } catch (error) {
        console.log("Unable to fetch userToken", error);
      }

      dispatch(getTokenAction({ userToken: token, userID: id }));
    };

    getUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Welcome"
        screenOptions={({ route }) => ({
          headerShown: false,
          gestureEnabled: route.name == "Home" ? false : true,
        })}
      >
        {userToken == null ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                animationTypeForReplace: isSignOut ? "pop" : "push",
              }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
