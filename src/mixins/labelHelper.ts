import {Component} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export class LabelHelper extends Vue {
  createTag() {
    this.$store.commit('createLabel');
  }
}
