import HomeScreen from "./pages/HomeScreen.vue";
import LikeScreen from "./pages/LikeScreen.vue";
import ProfileScreen from "./pages/ProfileScreen.vue";
import ReservationScreen from "./pages/ReservationScreen.vue";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { THEME } from "./ui/index";

const headerOptions = {
  headerStyle: { backgroundColor: THEME.primary },
  headerTintColor: "#fff",
  headerBackImage: (
    <Icon name="chevron-circle-left" solid size={22} color="#FFF" />
  ),
};

export default ROUTES = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Ciné'toile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" solid size={22} color={tintColor} />
      ),
      ...headerOptions,
    },
  },
  Like: {
    screen: LikeScreen,
    navigationOptions: {
      /* 👇👇👇 Inject tab bar options from
         createBottomTabNavigator func in
        App.vue file
      */
      title: "Mes Favoris",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" solid size={22} color={tintColor} />
      ),
      ...headerOptions,
    },
  },
  Reservation: {
    screen: ReservationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ticket-alt" size={22} color={tintColor} />
      ),
      ...headerOptions,
      title: "Mes réservations",
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" solid size={22} color={tintColor} />
      ),
      ...headerOptions,
      title: "Mon profil",
    },
  },
};
