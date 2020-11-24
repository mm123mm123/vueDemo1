<template>
    <lable class="notes">
        <span class="name">
          备注
        </span>
      <input type="text" placeholder="请在此输入备注"/>
    </lable>

</template>

<script>
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: flex;
  align-items: center;

  > .name {
    padding: 0 16px;
  }

  > input {
    background: transparent;
    border: none;
    height: 64px;
    flex-grow: 1;
  }
}

</style>