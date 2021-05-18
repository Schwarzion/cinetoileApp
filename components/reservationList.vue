<template>
  <view class="reservation-item">
    <text
      >{{ item.theaterName }} - {{ item.movieName }} -
      {{ item.priceName }} - Status : {{ item.status }}</text
    >
    <button title="status" />
  </view>
</template>
<script>
export default {
  props: {
    item: {
      Type: Object,
    },
  },
  methods: {},
};
</script>

<style>
.reservation-item {
  display: flex;
  justify-content: flex-start;
}
</style>
