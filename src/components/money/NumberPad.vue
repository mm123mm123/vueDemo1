<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="OK" @click="submitData">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output='0'

  inputContent(event: MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent!;
    if (this.output.length >= 16) {
      return;
    } else if (this.output === '0' && '0123456789'.indexOf(input) >= 0) {
      this.output = input;
      return;
    } else if (input === '.' && this.output.indexOf('.') >= 0) {
      return;
    }
    this.output += input;
  }

  remove() {
    this.output = this.output.slice(0, -1);
    if (this.output.length === 0 || this.output === '0') {
      this.output = '0';
    }
  }

  clear() {
    this.output = '0';
  }


  submitData() {
    this.$emit('update:value', this.output);
    this.$emit('update:dataBase');
    this.$emit('update:moneyPage')
    this.output='0'
  }

}
</script>

<style lang="scss" scoped>
.numberPad {
  @import '~@/assets/style/helper.scss';

  > .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 0;
    text-align: right;
    box-shadow: inset 0 -3px 3px -3px fade-out(black, 0.75),
    inset 0 3px 3px -3px fade-out(black, 0.75);
    height: 72px;
  }

  > .buttons {
    @extend %clearFix;
    float: left;
    width: 100%;

    > button {
      border: none;
      background: transparent;
      height: 64px;
      width: 25%;

      &.zero {
        width: 50%;
      }

      &.OK {
        float: right;
        height: 64px*2;
      }

      $color-key: #f2f2f2;

      &:nth-child(1) {
        background: $color-key;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($color-key, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($color-key, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($color-key, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($color-key, 4*4%);
      }

      &:nth-child(14) {
        background: darken($color-key, 4*5%);
      }

      &:nth-child(12) {
        background: darken($color-key, 4*6%);
      }
    }

  }
}

</style>