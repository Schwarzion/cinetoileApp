<template>
  <view class="container">
    <text>Test {{ msg }}</text>
    <button title="Go to home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
import { testApi } from "../../services/test.service";

export default {
  data() {
    return {
      msg: "",
    };
  },

  // Declare `navigation` as a prop
  props: {
    navigation: {
      type: Object,
    },
  },

  //Equivalent d'un ComponentDidMount ou d'un UseEffect en React -> gère le cycle de vie du composant
  beforeMount() {
    this.getMsg();
  },

  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },

    async getMsg() {
      const res = await testApi();
      //this.msg correspond à la variable msg initialisé plus haut dans data()
      this.msg = res.data;
    },
  },
};
</script>