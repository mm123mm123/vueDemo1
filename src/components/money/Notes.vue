<template>
  <label class="notes">
        <span class="name">
          备注
        </span>
    <input type="text" placeholder="请在此输入备注" v-model="value"/>
  </label>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
 value=''
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: flex;
  align-items: center;

  > .name {
    padding: 0 16px;
  }

  > input {
    background: transparent;
    border: none;
    height: 64px;
    flex-grow: 1;
  }
}

</style>