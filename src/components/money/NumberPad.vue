<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="OK">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NumberPad'
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