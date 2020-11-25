<template>
  <label class="notes">
        <span class="name">
          备注
        </span>
    <input type="text" placeholder="请在此输入备注" v-model="note"/>
  </label>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  note = '';
  @Watch('note')
  onValueChanged(note: string){
    this.$emit('update:note',note)
  }
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