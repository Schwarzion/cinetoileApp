<template>
  <scroll-view class="container">
    <image
      class="image"
      :style="{ width: '100%', height: 261 }"
      :source="{
        uri:
          'https://www.denofgeek.com/wp-content/uploads/2017/12/cinema_lights_2.jpg?resize=768%2C432',
      }"
    />
   <view>
      <view class="header">
        <text class="title">{{theater.name}}</text>
        <text>à 0.5km</text>
      </view>
      <view class="details">
        <view class="info">
          <icon class="icon" name="map-marker-alt" color="#454545" /> 
        <text>
          {{ theater.streetNumber }} {{ theater.address }}, {{ theater.postalCode }} {{ theater.city }}
        </text>
      </view>
        <view class="info">
          <icon class="icon" name="phone" color="#454545" /> 
        <text>
         {{theater.phoneNumber}}
        </text>
      </view>
        <view class="info">
          <icon class="icon" name="envelope" solid color="#454545" /> 
        <text>
          {{ theater.mail}}
        </text>
      </view> 
   </view>
   <view class="featured">
     <text class="title">À l'affiche</text>
     <view v-if="!isLoading" class="list">
       <movie-list-item v-for="movie in movies" v-bind:key="movie.id" :item="movie" @press.native="() => goToMovieScreen(movie)" />
     </view>
   </view>
  </scroll-view>
</template>
<script>
  import Icon from "react-native-vector-icons/FontAwesome5";
  import MovieListItem from "../../components/MovieListItem";
  import { getMovies } from '../../services/movie.service';

  export default {
    components: { Icon, MovieListItem },
    data() {
      return {
        theater: {},
        movies: [],
        isLoading: false,
        };
    },
    props: {
      navigation: {
      type: Object,
      },
    },
    methods: {
      async getMovies() {
        this.isLoading = true;
        const res = await getMovies();
        this.movies = res.data;
        this.isLoading = false;
      },
      goToMovieScreen(movie) {
        this.navigation.navigate("Movie", {movie})
      }
    },
    beforeMount() {
      this.theater = this.navigation.state.params.theater;
      this.getMovies()
    }
  }
</script>
<style scoped>
  .container {
    padding: 16px;
  }
  .image {
      border-radius: 7px;
    }
  .details {
    display: flex;
    flex-direction: column;
    padding: 4px;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 8px;
  }
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .icon {
    margin-right: 8px;
    font-size: 14px;
  }
  .title {
    color: #454545;
    font-size: 24px;
    margin-right: 24px;
    font-weight: bold;
    margin-left: 4px;
  }
  .featured {
    margin-top: 32px;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>