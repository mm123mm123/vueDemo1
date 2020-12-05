<template>
  <div class="layout-wrapper">
    <div class="layout-content" >
      <slot/>
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
.layout-wrapper{
  height:100vh;
  display:flex;
  flex-direction: column;
}
.layout-content{
  overflow:auto;
  flex-grow:1;
}
</style>