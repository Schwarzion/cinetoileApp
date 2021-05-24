<template>
  <view class="tag">
    <text>{{name}}</text>
  </view>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
      }
    }
  }
</script>
<style>
  .tag {
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;
    text-align: center;
    height: 28px;
    background-color: #EAEAEA;
  }
</style>