<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script>
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  height: 64px;

> li {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;

&.selected::after {
   content: '';
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 4px;
   background: #333333;
 }
}
}

</style>