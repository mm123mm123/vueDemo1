<template>
  <Layout>
    <Tabs class="money" :type.sync="moneyType" :data-source="moneyTabsDataSource">
    </Tabs>
    <ol>
      <li v-for="(item,index) in result" :key="index">
        <h3>
          <span>{{ timeFormat(item.time) }}</span>
          <span>￥{{ item.total }}</span>
        </h3>
        <ol>
          <li class='record' v-for="record in item.recordArray" :key="record.createAt">
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
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import bigNumber from 'bignumber.js';


type classifiedRecords = {
  time: string;
  recordArray: recordItem[];
  total?: string;
}

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  moneyType = '-';
  moneyTabsDataSource = [
    {name: '支出', type: '-'},
    {name: '收入', type: '+'}
  ];


  get recordList() {
    return this.$store.state.recordList as recordItem[];
  }

  createAtFormat(createAt: string) {
    return dayjs(createAt).format('YYYY-M-D');
  }

  computeTotal(records: classifiedRecords[]) {
    for (let i = 0; i < records.length; i++) {
      const numberList = records[i].recordArray.map(record => new bigNumber(record.NumberPadOutput));
      records[i].total = numberList.reduce((num, item) => num.plus(item)).toFixed();
    }
  }

  get result() {
    const recordList = clone(this.recordList.filter(record => record.type === this.moneyType)) as recordItem[];
    recordList.sort(
        (a, b) => dayjs(a.createAt).valueOf() - dayjs(b.createAt).valueOf()
    );

    const hashRecords: classifiedRecords[] =
        [{
          time: this.createAtFormat(recordList[0].createAt),
          recordArray: [recordList[0]],
        }];
    for (let i = 1; i < recordList.length; i++) {
      const current = recordList[i];
      const last = hashRecords[hashRecords.length - 1];
      if (dayjs(last.time).isSame(current.createAt, 'day')) {
        last.recordArray.push(current);
      } else {
        hashRecords.push({
          time: this.createAtFormat(current.createAt),
          recordArray: [current]
        });
      }
    }
    this.computeTotal(hashRecords);
    return hashRecords;
  }

  timeFormat(time: string) {
    if (dayjs(time).isBefore(dayjs().subtract(2, 'day'), 'day')) {
      if (dayjs(time).isSame(dayjs(), 'year')) {
        return dayjs(time).format('M月D日');
      }
      return dayjs(time).format('YYYY年M月D日');
    } else if (dayjs(time).isSame(dayjs().subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (dayjs(time).isSame(dayjs().subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (dayjs(time).isSame(dayjs(), 'day')) {
      return '今天';
    }
  }

  beforeCreate() {
    this.$store.commit('getRecordList');
  }

  labelString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(' ');
  }
}

</script>

<style lang="scss" scoped>
%item {
  padding: 7px 16px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  @extend %item
}

.record {
  @extend %item;


  .label {
    white-space: nowrap;
  }

  .note {
    margin-left: 13px;
    margin-right: auto;
  }
}
</style>


