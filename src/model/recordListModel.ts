import clone from '@/lib/clone';
const recordListModel = {
  data: [] as recordItem[],

  getData() {
    this.data = JSON.parse(localStorage.getItem('recordList') || '[]') as Array<recordItem>;
    return this.data;
  },
  createData(record: recordItem) {
    record.createAt = new Date();
    const parsedRecord = clone(record);
    this.data.push(parsedRecord);
    this.saveData();
  },
  saveData() {
    localStorage.setItem('recordList', JSON.stringify(this.data));
  }
};
export default recordListModel;