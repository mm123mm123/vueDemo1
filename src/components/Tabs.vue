<template>
  <ul class="types">
    <li :class="type===data.type&&'selected'" @click="selectType(data.type)"
        v-for="data in dataSource" :key="data.name">
      {{data.name}}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
  @Prop({required: true}) dataSource!: Array<{ name: string; type: string }>;
  @Prop(String) type!: string;

  selectType(type: string) {
    if (this.dataSource.map(item=>item.type).indexOf(type)===-1) {
      throw new Error('type is unknown');
    }
    this.$emit('update:type', type);
  }
}

</script>

<style scoped lang="scss">
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