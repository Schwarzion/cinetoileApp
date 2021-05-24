<template>
  <app-navigator></app-navigator>
</template>
<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "vue-native-router";
import { THEME } from "./ui/index";
import ROUTES from "./routes";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

/* Routes stacking bro, that's what i'm talking about, so much fun
    Every bottom's bar icons will have their own navigation,
    history and stuff. They're independant of each other.
    To do so, you have to create for each icon a stackNavigator
    that will contain every icon sub screens
*/

const HomeStack = createStackNavigator(
  { stack: ROUTES.Home, Theater: ROUTES.Theater, Movie: ROUTES.Movie },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" solid size={22} color={tintColor} />
      ),
    },
  }
);

const LikeStack = createStackNavigator(
  { stack: ROUTES.Like },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" solid size={22} color={tintColor} />
      ),
    },
  }
);

const ReservationStack = createStackNavigator(
  { stack: ROUTES.Reservation },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ticket-alt" size={22} color={tintColor} />
      ),
    },
  }
);

const ProfileStack = createStackNavigator(
  { stack: ROUTES.Profile },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" solid size={22} color={tintColor} />
      ),
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  { HomeStack, LikeStack, ReservationStack, ProfileStack },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: THEME.primary,
      inactiveTintColor: THEME.primaryAccent,
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "green",
      },
    },
  }
);

const AppNavigator = createAppContainer(BottomTabNavigator);

export default {
  components: { AppNavigator },
};
</script>
