// import createId from '@/lib/createId';
//
// const labelListStore = {
//   labelList: [] as label[],
//   getLabelList() {
//     this.labelList = JSON.parse(localStorage.getItem('labelList') || '[]') as label[];
//     return this.labelList;
//   },
//   createLabel() {
//     console.log(this.labelList);
//     const name = window.prompt('请输入标签名字');
//     if (name) {
//       if (this.labelList.map(element => element.name).indexOf(name!) >= 0) {
//         window.alert('标签名不能重复');
//       } else {
//         this.labelList.push({id: createId().toString(), name: name});
//         this.saveLabelList();
//       }
//     } else if (name === '') {
//       window.alert('标签名不能为空');
//     }
//   },
//   editLabel(id: string, inputData: string) {
//     const label: label = this.labelList.filter(item => item.id === id)[0];
//     if (!inputData) {
//       return 'null';
//     } else if (this.labelList.filter(item => item.name === inputData)[0]) {
//       return 'duplicate';
//     } else {
//       label.name = inputData;
//       this.saveLabelList();
//       return 'success';
//     }
//   },
//   removeLabel(label: label) {
//     if (window.confirm(`确定删除${label.name}？`)) {
//       this.labelList.splice(this.labelList.map(item => item.name).indexOf(label.name), 1);
//       this.saveLabelList();
//       return true;
//     }
//   },
//   findLabel(id: string) {
//     return labelListStore.getLabelList().filter(element => element.id === id)[0];
//   },
//   saveLabelList() {
//     localStorage.setItem('labelList', JSON.stringify(this.labelList));
//   }
// };
// labelListStore.getLabelList();
// export default labelListStore;