const model = {
  cloneData(record: RecordItem | Array<RecordItem>) {
    return JSON.parse(JSON.stringify(record)) ;
  },
  getData() {
    return JSON.parse(localStorage.getItem('recordList')|| '[]') as Array<RecordItem>;
  },
  saveData(recordList: Array<RecordItem>) {
    localStorage.setItem('recordList', JSON.stringify(recordList));
  }
};
export default model;