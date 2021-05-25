<template>
  <view class="container">
    <map-view class="map" :initialRegion="{latitudeDelta: 0.0922, longitudeDelta: 0.0421, latitude: 50.6475667, longitude: 3.059355}" />
  </view>
</template>
<script>
  import MapView from 'react-native-maps';

  export default {
    components: { MapView },
    props: {
      markers: []
    }
  }
</script>
<style>
  .map {
    width: 100%;
    height: 300px;
  }
  .container {
    width: 400px;
    height: 300px;
  }
</style>