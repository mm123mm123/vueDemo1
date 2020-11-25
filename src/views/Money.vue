<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="record.NumberPadOutput=$event"/>
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


type Record = {
  NumberPadOutput: string;
  type: string;
  noteValue: string;
  selectedTags: string[];
}
@Component({
  components: {NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '理财'];
  record: Record = {
    NumberPadOutput: '0',
    type: '-',
    noteValue: '',
    selectedTags: []
  };
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
