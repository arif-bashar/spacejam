import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { HomeIcon, SearchIcon, TabProfileIcon } from "./components/Icons";
import WelcomeScreen from "./screens/WelcomeScreen";

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
