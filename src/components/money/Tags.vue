<template>
  <div class="tags">

    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>住</li>
      <li>行</li>
      <li>食</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags'
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    padding: 0 16px;

    > li {
      background: #d9d9d9;
      font-size: 14px;
      height: 24px;
      border-radius: (24px/2);
      padding: 0 17.5px;
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > .new {
    padding: 16px 0 12px 16px;

    > button {
      font-size: 14px;
      background: transparent;
      border: none;
      font-family: inherit;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }
}
</style>