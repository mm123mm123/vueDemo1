<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix&&`${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  props:['classPrefix'],
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
.content{
  overflow:auto;
  flex-grow:1;
}
</style>