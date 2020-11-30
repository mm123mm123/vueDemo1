type label =
  {
    id: string;
    name: string;
  }
type labelListModel =
  {
    data: label[];
    getData: () => label[];
    create: () => void;
    saveData: () => void;
  }

const labelListModel: labelListModel = {
  data: [],
  getData() {
    this.data = JSON.parse(localStorage.getItem('labelList') || '[]')as label[];
    return this.data;
  },
  create() {
    const name = window.prompt('请输入标签名字');
    if (name) {
      if (this.data.map(element=>element.name).indexOf(name!) >= 0) {
        window.alert('标签名不能重复');
      } else {
        this.data.push({id:name,name:name});
        this.saveData();
      }
    } else if (name === '') {
      window.alert('标签名不能为空');
    }
  },
  saveData() {
    localStorage.setItem('labelList', JSON.stringify(this.data));
  }
};
export default labelListModel;