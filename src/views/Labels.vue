<template>
  <Layout>
    <ol class="tagList">
      <li>
        <span>衣</span>
        <Icon icon-name="rightArrow"></Icon>
      </li>
      <li>
        <span class="tag">食</span>
        <Icon icon-name="rightArrow"></Icon>
      </li>
      <li>
        <span class="tag">住</span>
        <Icon icon-name="rightArrow"></Icon>
      </li>
      <li>
        <span class="tag">行</span>
        <Icon icon-name="rightArrow"></Icon>
      </li>
    </ol>
    <div class="createTag">
      <button>新建标签</button>
    </div>
  </Layout>
</template>

<script>

export default {
  name: 'Labels.vue'
}
</script>
<style scoped lang="scss">

.tagList {
  > li {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbbc1;
    padding: 8px 0 12px 0px;
    margin-left: 15px;
    > svg{
      height:18px;
      width:18px;
      margin-right: 12px;
    }
  }
}
.createTag{
  display: flex;
  justify-content: center;
  padding: 44px 0 0 0;
}
</style>