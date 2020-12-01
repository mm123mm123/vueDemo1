<template>
  <Layout>
    <div class="tagList">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`"
                   v-for="tag in tags" :key="tag.name">
        <span>{{ tag.name }}</span>
        <Icon icon-name="rightArrow"/>
      </router-link>
    </div>
    <div class="createTag">
      <Button @buttonClick="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import labelListModel from '@/model/labelListModel';
import Button from '@/components/Button.vue';
@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = window.labelList;

  createTag() {
    labelListModel.create();
  }
}
</script>
<style scoped lang="scss">

.tagList {
  > .tag {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbbc1;
    padding: 8px 0 12px 0px;
    margin-left: 15px;

    > svg {
      height: 18px;
      width: 18px;
      margin-right: 12px;
    }
  }
}

.createTag {
  display: flex;
  justify-content: center;
  padding: 44px 0 0 0;


}
</style>