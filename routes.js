import HomeScreen from "./pages/Home/HomeScreen.vue";
import TheaterScreen from "./pages/Home/TheaterScreen.vue";
import LikeScreen from "./pages/Like/LikeScreen.vue";
import ProfileScreen from "./pages/Profile/ProfileScreen.vue";
import ReservationScreen from "./pages/Reservation/ReservationScreen.vue";
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
      ...headerOptions,
    },
  },
  Theater: {
    screen: TheaterScreen,
    navigationOptions: 
      ({navigation}) => ({
          title: navigation.state.params.theater.name,
          ...headerOptions
        
  })
},
  Like: {
    screen: LikeScreen,
    navigationOptions: {
      /* 👇👇👇 Inject tab bar options from
         createBottomTabNavigator func in
        App.vue file
      */
      title: "Mes Favoris",
      ...headerOptions,
    },
  },
  Reservation: {
    screen: ReservationScreen,
    navigationOptions: {
      ...headerOptions,
      title: "Mes réservations",
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      ...headerOptions,
      title: "Mon profil",
    },
  },
};
