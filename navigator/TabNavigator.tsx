import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  // tabBarIcon:
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

const ProfileStack = createStackNavigator({
  Home: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "red",
      activeBackgroundColor: "red",
    },
  }
);

export default TabNavigator;
