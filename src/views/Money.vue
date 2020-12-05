<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="record.NumberPadOutput=$event"
               @update:dataBase="updateDatabase"/>
    <Types :type.sync="record.type"/>
    <InputItem name='备注'
               placeholder="请输入备注"
               class-prefix="money"
               @update:data="record.noteValue=$event"/>
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
import store from '@/store/index2'


@Component({
  components: {InputItem, NumberPad, Types, Tags}
})
export default class Money extends Vue {
  record: recordItem = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: [],
    createAt: new Date()
  };

  updateDatabase() {
    store.createRecord(this.record);
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
