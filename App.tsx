import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./components/HomeTabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { StackParams } from "./StackNavigatorTypes";
import { RootState } from "./slices/rootReducer";
import SplashScreen from "./screens/SplashScreen";
import PlayerScreen from "./screens/PlayerScreen";
import { useFirebase } from "react-redux-firebase";

const Stack = createStackNavigator<StackParams>();

export default function App() {
  const firebase = useFirebase();
  const [signedIn, setSignedIn] = useState(false);
  const { isSignOut } = useSelector((state: RootState) => state.auth);

  const checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedIn(true);
        console.log("signed in");
      } else {
        setSignedIn(false);
      }
    });
  };

  useEffect(() => {
    checkAuth();
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
        {signedIn == false ? (
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
          <>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Player" component={PlayerScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
