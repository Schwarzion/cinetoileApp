<template>
  <view>
    <text class="title">Les cinémas autour de moi</text>
    <view class="list">
      <text v-if="isLoading">Chargement ...</text>
      <theater-list-item
        v-else
        v-for="theater in theaters"
        @press.native="() => goToTheaterScreen(theater)"
        :key="theater.id"
        :item="theater"
      />
    </view>
  </view>
</template>

<script>
import { getTheaters } from "../../services/theater.service";
import TheaterListItem from "../../components/TheaterListItem";

export default {
  components: { TheaterListItem },
  data() {
    return {
      theaters: [],
      isLoading: false,
    };
  },
  // Declare `navigation` as a prop
  props: {
    navigation: {
      type: Object,
    },
  },
  beforeMount() {
    this.getTheaters();
  },
  methods: {
    async getTheaters() {
      this.isLoading = true;
      const res = await getTheaters();
      this.theaters = res.data
        .concat(res.data)
        .concat(res.data)
        .concat(res.data);
      this.isLoading = false;
    },
    goToTheaterScreen(theater) {
      this.navigation.navigate("Theater", {theater})
    }
  },
};
</script>
<style>
.title  {
  text-align: center;
  font-size: 24px;
  color: #454545;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>