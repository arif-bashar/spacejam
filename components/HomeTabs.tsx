import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeIcon, SearchIcon } from "./Icons";
import { useSelector } from "react-redux";
import { StackParams } from "../StackNavigatorTypes";
import { RootState } from "../slices/rootReducer";
import TabAddButton from "./TabAddButton";
import { View, Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  const { optionShow, createShow, joinShow } = useSelector(
    (state: RootState) => state.addSpace
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#242733",
        activeBackgroundColor: "#242733",
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIcon color="#fff" /> : <HomeIcon color="#5A5C64" />,
          tabBarVisible: optionShow || createShow || joinShow ? false : true,
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
                opacity: optionShow || createShow || joinShow ? 0 : 1,
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

export default HomeTabs;
