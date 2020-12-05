import clone from '@/lib/clone';

const recordListStore={
  recordList: [] as recordItem[],

  getRecordList() {
    this.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as Array<recordItem>;
    return this.recordList;
  },
  createRecord(record: recordItem) {
    console.log(this.recordList);
    record.createAt = new Date();
    const parsedRecord = clone(record);
    this.recordList.push(parsedRecord);
    this.saveRecordList();
  },
  saveRecordList() {
    localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}

export default recordListStore;