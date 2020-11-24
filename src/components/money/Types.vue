<template>
  <ul class="types">
    <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
    <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';

  selectType(type: string) {
    if(type!=='-'&&type!=='+'){
      throw new Error('type is unknown')
    }
    this.type = type;
  }
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