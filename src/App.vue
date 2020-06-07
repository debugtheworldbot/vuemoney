<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    font-family: $font-hei;
  }
</style>
<script>
  import Nav from "@/components/Nav";
  export default {
    components: {Nav}
  }
</script>