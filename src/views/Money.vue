<template>
  <Layout class-prefix="layout">
    {{recordList}}
    <NumberPad @update:value="record.NumberPadOutput=$event"
               @update:dataBase="updateDatabase"/>
    <Types :type.sync="record.type"/>
    <InputItem name='备注'
               placeholder="请输入备注"
               class-prefix="money"
               @update:note="record.noteValue=$event"/>
    <Tags :data-source.sync="labels"
          :selected-tags.sync="record.selectedTags"/>
  </Layout>
</template>

<script lang="ts">

import Tags from '@/components/money/Tags.vue';
import InputItem from '@/components/InputItem.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import recordListModel from '@/model/recordListModel';


@Component({
  components: {InputItem, NumberPad, Types, Tags}
})
export default class Money extends Vue {
  labels = window.labelList.map(element => element.name);
  record: recordItem = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: [],
    createAt: new Date()
  };
  recordList: Array<recordItem> = recordListModel.getData();

  updateDatabase() {
    recordListModel.createData(this.record);
  }
}
</script>

<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.money-input {
  height: 64px;
}
</style>
