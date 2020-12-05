import {Component} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class LabelHelper extends Vue {
  createTag() {
    this.$store.commit('createLabel');
  }
}
