<template>
  <label class="notes">
        <span class="name">
          {{name}}
        </span>
    <input type="text"
           :placeholder="placeholder"
           :value="labelName"
           @input="onValueChanged($event.target.value)"
           />
  </label>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue {
  @Prop() name!: string
  @Prop() placeholder!: string
  @Prop({default:''})labelName!: string;
  onValueChanged(inputData: string){
    this.$emit('update:data',inputData)
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