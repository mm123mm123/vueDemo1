<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="record.NumberPadOutput=$event"
               @update:dataBase="updateDatabase"/>
    <Types :type.sync="record.type"/>
    <InputItem name='备注'
               placeholder="请输入备注"
               class-prefix="money"
               @update:note="record.noteValue=$event"/>
    <Tags :data-source.sync="tags"
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
import labelListModel from '@/model/labelListModel';


@Component({
  components: {InputItem, NumberPad, Types, Tags}
})
export default class Money extends Vue {
  tags = labelListModel.getData().map(element => element.name);
  record: RecordItem = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: [],
    createAt: new Date()
  };
  recordList: Array<RecordItem> = recordListModel.getData();

  updateDatabase() {
    this.record.createAt = new Date();
    const parsedRecord = recordListModel.cloneData(this.record);
    this.recordList.push(parsedRecord);
    recordListModel.saveData(this.recordList);
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
