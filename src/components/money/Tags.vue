<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          @click="select(tag)"
          :class="selectedTags.indexOf(tag)>=0&&'selected'">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import labelListModel from '@/model/labelListModel';

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[] | undefined;
  @Prop(Array) selectedTags!: string[];

  select(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
      this.$emit('update:selectedTags', [...this.selectedTags]);
    } else {
      this.selectedTags.push(tag);
      this.$emit('update:selectedTags', [...this.selectedTags]);
    }
  }

  createTag() {
    labelListModel.create();
    this.$emit('update:dataSource',  labelListModel.getData().map(element => element.name))
  }
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
    flex-wrap: wrap;

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
      margin-top: 6px;
      &.selected {
        background: darken(#d9d9d9, 50%);
        color: white;
      }
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