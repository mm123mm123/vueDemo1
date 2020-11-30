<template>
  <layout>
    <nav>
      <Icon class="arrow" icon-name="leftArrow"/>
      <span class="text">编辑标签</span>
      <div/>
    </nav>
      <InputItem name="标签名"
                 placeholder="请输入标签名"
                 class-prefix="editLabel"
                 class="input"
      />
    <div class="buttonWrapper">
      <Button >删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import InputItem from '@/components/InputItem.vue';
import {Component} from 'vue-property-decorator';
import labelListModel from '@/model/labelListModel';
import Button from '@/components/Button.vue';

@Component({
  components: {InputItem, Button}
})
export default class EditLabel extends Vue {
  created() {
    const routeId = this.$route.params.id;
    const label = labelListModel.getData().filter(element => element.id === routeId)[0];
    if (label) {
      console.log(label);
    } else {
      this.$router.replace('/404');
    }
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
.input{
  font-size:16px;
  margin-top: 6px;
}
.buttonWrapper{
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