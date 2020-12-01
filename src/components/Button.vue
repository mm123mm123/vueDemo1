<template>
  <button @click="$emit('buttonClick')">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {
}
</script>

<style scoped>
button {
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 4px;
  background: #767676;
  height: 40px;
  width: 90px;
}
</style>