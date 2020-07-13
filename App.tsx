import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { HomeIcon, SearchIcon } from "./components/Icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import { StackParams } from "./StackNavigatorTypes";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "./components/Firebase";
import { getTokenAction } from "./slices/authReducer";
import { RootState } from "./slices/rootReducer";
import SplashScreen from "./screens/SplashScreen";
import TabAddButton from "./components/TabAddButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Dimensions } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<StackParams>();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#242733",
        activeBackgroundColor: "#242733",
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
        tabStyle: { backgroundColor: "#242733" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIcon color="#fff" /> : <HomeIcon color="#5A5C64" />,
        }}
      />
      <Tab.Screen
        name="AddSpace"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => (
            <View
              style={{
                position: "absolute",
                left: Dimensions.get("window").width / 2 - 25,
                zIndex: 1,
                top: -35,
                width: 71,
                height: 71,
              }}
            >
              <TabAddButton />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SearchIcon color="#fff" />
            ) : (
              <SearchIcon color="#5A5C64" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

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
