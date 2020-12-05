<template>
  <Layout>
    <Tabs class="money" :type.sync="moneyType" :data-source="moneyTabsDataSource">
    </Tabs>
    <Tabs class='time' :type.sync="timeType" :data-source="timeTabsDataSource">
    </Tabs>
    <ol>
      <li v-for="(array,date) in result" :key="date">
        <h3>{{ date }}</h3>
        <ol>
          <li class='record' v-for="record in array" :key="record.createAt">
            <span class="label">{{ labelString(record.selectedTags) }}</span>
            <span class="note">
              {{ record.noteValue }}
            </span>
            <span>￥{{ record.NumberPadOutput }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const hashTable: { [key: string]: recordItem[] } = {};
    for (let i = 0; i < this.recordList.length; i++) {
      const [date, time] = this.recordList[i].createAt.split('T');
      hashTable[date] = hashTable[date] || [];
      hashTable[date].push(this.recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('getRecordList');
  }

  labelString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(' ');
  }

  moneyType = '-';
  moneyTabsDataSource = [
    {name: '支出', type: '-'},
    {name: '收入', type: '+'}
  ];
  timeType = 'day';
  timeTabsDataSource = [
    {name: '按日', type: 'day'},
    {name: '按周', type: 'week'},
    {name: '按月', type: 'month'}
  ];
}

</script>

<style lang="scss" scoped>
%item {
  padding: 7px 16px;
  font-size: 17px;
}

h3 {
  @extend %item
}

.record {
  @extend %item;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    white-space: nowrap;
  }

  .note {
    margin-left: 13px;
    margin-right: auto;
  }
}
</style>


