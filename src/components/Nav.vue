<template>
  <nav id="nav">
    <router-link to="/money" class='item' active-class="selected">
      <Icon icon-name="money" />
      记账
    </router-link>
    <router-link to="/labels" class='item' active-class="selected">
      <Icon icon-name="labels" />
      标签
    </router-link>
    <router-link to="/statistics" class='item' active-class="selected">
      <Icon icon-name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script>

export default {
  name: 'Nav.vue'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
#nav {
  font-size: 16px;
  display: flex;
  box-shadow:0 0 3px rgba(0,0,0,0.25);

  .item {
    width:33.33333333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:2px 0;

    .icon {
      height: 32px;
      width: 32px;
    }
  }
}
.selected{
  color:$color-highlight;
}
</style>