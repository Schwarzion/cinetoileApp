<template>
    <view>
        <text>Coucou</text>
        <button title="Go to test" @press="goToTestScreen"></button>
    </view>
</template>

<script>
export default {
  // Declare `navigation` as a prop
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    goToTestScreen() {
      this.navigation.navigate("Test");
    }
  }
}
</script>