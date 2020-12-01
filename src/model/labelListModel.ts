import createId from '@/lib/createId';

type labelListModel =
  {
    data: label[];
    getData: () => label[];
    create: () => void;
    edit: (id: string, inputData: string) => 'null' | 'duplicate' | 'success';
    remove: (label: label) => void;
    saveData: () => void;
  }

const labelListModel: labelListModel = {
  data: [],
  getData() {
    this.data = JSON.parse(localStorage.getItem('labelList') || '[]') as label[];
    return this.data;
  },
  create() {
    const name = window.prompt('请输入标签名字');
    if (name) {
      if (this.data.map(element => element.name).indexOf(name!) >= 0) {
        window.alert('标签名不能重复');
      } else {

        this.data.push({id: createId().toString(), name: name});
        this.saveData();
      }
    } else if (name === '') {
      window.alert('标签名不能为空');
    }
  },
  edit(id, inputData) {
    const label: label = this.data.filter(item => item.id === id)[0];
    if (!inputData) {
      return 'null';
    } else if (this.data.filter(item => item.name === inputData)[0]) {
      return 'duplicate';
    } else {
      label.name = inputData;
      this.saveData();
      return 'success';
    }
  },
  remove(label) {
    window.alert('确定删除该标签？');
    this.data.splice(this.data.indexOf(label), 1);
    this.saveData();
  },
  saveData() {
    localStorage.setItem('labelList', JSON.stringify(this.data));
  }
};
export default labelListModel;