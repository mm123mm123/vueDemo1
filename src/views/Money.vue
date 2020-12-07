<template>
  <Layout>
    <NumberPad @update:value="record.NumberPadOutput=$event"
               @update:dataBase="updateDatabase"
               @update:moneyPage="updateMoneyPage"
    />
    <Tabs :type.sync="record.type" :data-source="tabsDatasource"/>
    <InputItem name='备注'
               class="inputItem"
               placeholder="请输入备注"
               :message.sync="record.noteValue"/>
    <Tags :selected-tags.sync="record.selectedTags"/>
  </Layout>
</template>

<script lang="ts">

import Tags from '@/components/money/Tags.vue';
import InputItem from '@/components/InputItem.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {Tabs, InputItem, NumberPad, Types, Tags}
})
export default class Money extends Vue {
  record: recordItem = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: [],
    createAt: new Date().toISOString()
  };
  tabsDatasource = [
    {name: '支出', type: '-'},
    {name: '收入', type: '+'}
  ];

  updateDatabase() {
    this.$store.commit('getRecordList');
    if (this.record.selectedTags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
  }

  updateMoneyPage() {
    this.record.noteValue = '';
    this.record.selectedTags = [];
  }
}
</script>


<style lang="scss" scoped>
.inputItem ::v-deep input {
  height: 64px;
}

::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>