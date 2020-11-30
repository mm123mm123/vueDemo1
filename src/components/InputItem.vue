<template>
  <label class="notes">
        <span class="name">
          {{name}}
        </span>
    <input :class="classPrefix&&`${classPrefix}-input`"
           type="text"
           :placeholder="placeholder"
           v-model="note"/>
  </label>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue {
  @Prop() name!: string
  @Prop() placeholder!: string
  @Prop() classPrefix!: string
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
    flex-grow: 1;
  }
}

</style>