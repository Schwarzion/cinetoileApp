<template>
  <scroll-view class="container">
    <view>
      <image
        class="image"
        :style="{ width: '100%', height: 261 }"
        :source="{
          uri:
            movie.image || 'https://www.denofgeek.com/wp-content/uploads/2017/12/cinema_lights_2.jpg?resize=768%2C432',
        }"
      />
      <text class="title">{{movie.name}}</text>
      <view class="details">
        <text>{{movie.duration}}</text>
        <text class="dot">•</text>
        <text>{{new Date(movie.launchdate).getYear()}}</text>
        <text class="dot">•</text>
        <text>{{movie.country}}</text>
      </view>
      <view class="tags">
        <view class="categories">
          <tag class="tag" name="Drame" />
          <tag name="Action" />
        </view>
        <tag class="tag" :name="movie.advisedAge.toString()" />
      </view>
      <view class="section">
        <text class="title">Synopsis</text>
        <text>
          {{movie.description}}
        </text>
      </view>
      <view class="section">
        <text class="title">Casting</text>
        <text>De {{movie.director}}</text>
        <text>Avec {{movie.casting}}</text>
      </view>
    </view>
  </scroll-view>
</template>
<script>
  import Tag from '../../components/Tag';

  export default {
    components: {Tag},
    data() {
      return {
        movie: {}
      }
    },
    props: {
      navigation: {
        Type: Object,
      }
    },
    beforeMount() {
      this.movie = this.navigation.state.params.movie;
      console.log({movie: this.movie});
    }
  }
</script>
<style>
  .container {
    padding: 16px;
  }
  .image {
      border-radius: 7px;
    }
  .details {
    display: flex;
    flex-direction: row;
  }
  .title {
    color: #454545;
    font-size: 24px;
    margin-right: 24px;
    font-weight: bold;
    margin-right: 4px;
  }
  .dot {
    margin-left: 4px;
    margin-right: 4px;
  }
  .tags {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .categories {
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
  }
  .tag {
    margin-left: 8px;
    margin-right: 8px;
  }
  .section {
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>