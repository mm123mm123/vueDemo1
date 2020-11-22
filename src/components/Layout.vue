<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  components:{Nav},
  name: "Layout.vue"
}
</script>

<style scoped>
.nav-wrapper{
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction: column;
}
.content{
  overflow:auto;
  flex-grow:1;
}
</style>