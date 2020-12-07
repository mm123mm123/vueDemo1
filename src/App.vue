<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: $font-hei;
  line-height: 1.5;
  color: #333;
  max-width:500px;
  margin:0 auto;
}
</style>
