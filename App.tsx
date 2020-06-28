import * as React from "react";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { HomeIcon, SearchIcon, TabProfileIcon } from "./components/Icons";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { Provider } from "react-redux";
//import { rrfProps, firebaseConfig } from "./components/Firebase";
import store from "./store/store"
import { ReactReduxFirebaseProvider } from "react-redux-firebase";


//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
//const docRef = db.collection("users").doc("user-1");

/*
// Get a document, forcing the SDK to fetch from the offline cache.
docRef.get({source: 'server'}).then(function(doc) {
  // Document was found in the cache. If no cached document exists,
  // an error will be returned to the 'catch' block below.
  console.log("Cached document data:", doc.data());
}).catch(function(error) {
  console.log("Error getting cached document:", error);
});
*/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === "Home") {
            return <HomeIcon />;
          } else if (route.name === "Search") {
            return <SearchIcon />;
          } else if (route.name === "Profile") {
            return <TabProfileIcon />;
          }
        },
      })}
      tabBarOptions={{
        inactiveBackgroundColor: "#242733",
        activeBackgroundColor: "#242733",
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={({ route }) => ({
            headerShown: false,
          })}
        >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
