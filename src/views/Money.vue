<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="record.NumberPadOutput=$event" @update:dataBase="updateDatabase"/>
    <Types :type.sync="record.type"/>
    <Notes @update:note="record.noteValue=$event"/>
    <Tags :data-source.sync="tags" :selected-tags.sync="record.selectedTags"/>
  </Layout>
</template>

<script lang="ts">

import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import model from '@/model.ts';


@Component({
  components: {NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '理财'];
  record: RecordItem = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: [],
    createAt: new Date()
  };
  recordList: Array<RecordItem> = model.getData();

  updateDatabase() {
    this.record.createAt = new Date();
    const parsedRecord = model.cloneData(this.record);
    this.recordList.push(parsedRecord);
    model.saveData(this.recordList)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
