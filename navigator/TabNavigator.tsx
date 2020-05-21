import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeIcon, TabProfileIcon, SearchIcon } from "../components/Icons";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: () => <HomeIcon />,
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: () => <SearchIcon />,
};

const ProfileStack = createStackNavigator({
  Home: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: () => <TabProfileIcon />,
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "#242733",
      activeBackgroundColor: "#242733",
      showLabel: false,
      style: {
        borderTopWidth: 0,
        elevation: 10,
      },
    },
  }
);

export default TabNavigator;
