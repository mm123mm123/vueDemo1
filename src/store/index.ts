import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';

Vue.use(Vuex);
type rootState = {
  recordList: recordItem[];
  labelList: label[];
  targetLabel?: label;
  removeState?: boolean;
}
const store = new Vuex.Store({
  state: {
    recordList: [] as recordItem[],
    labelList: [] as label[],
    targetLabel: undefined,
    removeState: undefined,
  } as rootState,
  mutations: {
    getLabelList(state) {
      state.labelList = JSON.parse(localStorage.getItem('labelList') || '[]') as label[];
    },
    createLabel(state) {
      console.log(this.labelList);
      const name = window.prompt('请输入标签名字');
      if (name) {
        if (state.labelList.map(element => element.name).indexOf(name!) >= 0) {
          window.alert('标签名不能重复');
        } else {
          state.labelList.push({id: createId().toString(), name: name});
          console.log(state.labelList);
          store.commit('saveLabelList');
        }
      } else if (name === '') {
        window.alert('标签名不能为空');
      }
    },
    editLabel(state, payLoad: { id: string; inputData: string }) {
      const label: label = state.labelList.filter(item => item.id === payLoad.id)[0];
      if (!payLoad.inputData) {
        return 'null';
      } else if (state.labelList.filter(item => item.name === payLoad.inputData)[0]) {
        return 'duplicate';
      } else {
        label.name = payLoad.inputData;
        store.commit('saveLabelList');
        return 'success';
      }
    },
    findLabel(state, id: string) {
      state.targetLabel = state.labelList.filter(element => element.id === id)[0];
    },
    removeLabel(state, label: label) {
      if (window.confirm(`确定删除${label.name}？`)) {
        state.labelList.splice(state.labelList.map(item => item.name)
          .indexOf(label.name), 1);
        store.commit('saveLabelList');
        state.removeState = true;
      }else{
        state.removeState = false;
      }
    },
    saveLabelList(state) {
      localStorage.setItem('labelList', JSON.stringify(state.labelList));
    }
  },
});

export default store;
