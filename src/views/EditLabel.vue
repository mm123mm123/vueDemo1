<template>
  <layout>
    <nav>
      <Icon class="arrow" icon-name="leftArrow"
            @iconClick="back"
      />
      <span class="text">编辑标签</span>
      <div/>
    </nav>
    <InputItem name="标签名"
               class-prefix="editLabel"
               class="input"
               :labelName="label.name"
               @update:data="editData"
    />
    <div class="buttonWrapper">
      <Button @buttonClick='remove'>删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import InputItem from '@/components/InputItem.vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {InputItem, Button}
})
export default class EditLabel extends Vue {
  get label() {
    return this.$store.state.targetLabel;
  }
  get removeState(){
    return this.$store.state.removeState;
  }

  created() {
    this.$store.commit('getLabelList')
    this.$store.commit('findLabel', this.$route.params.id);
    if (!this.label) {
      this.$router.replace('/404');
    }
  }

  editData(inputData: string) {
    this.$store.commit('editLabel',
        {id:this.label.id, inputData:inputData});
  }

  remove() {
    this.$store.commit('removeLabel',this.label)
    if (this.removeState) {
      this.$router.back();
    }
  }

  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px 11px 16px;

  > .arrow {
    height: 22px;
    width: 22px;
  }

  > span {
    font-size: 16px;
  }

  > div {
    height: 22px;
    width: 22px;
  }

}

.input {
  font-size: 16px;
  margin-top: 6px;
}

.buttonWrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>

<style>
.editLabel-input {
  height: 44px;
}
</style>