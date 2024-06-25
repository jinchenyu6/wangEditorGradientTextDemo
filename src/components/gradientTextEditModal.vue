<template>
  <div class="modal-wrapper">
    <el-button class="button" @click="edit">编辑</el-button>
    <el-icon class="close-button-wrapper" @click="onClose"><Close /></el-icon>
  </div>
</template>

<script setup>
import { Close } from "@element-plus/icons-vue";
import { defineEmits } from "vue";

const emits = defineEmits(["close", "edit"]);
//编辑
const edit = () => {
  emits("edit");
};

//关闭modal
const onClose = () => {
  emits("close");
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 200px;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 2;
  background-color: rgb(251, 251, 251);
  border: 1px silver solid;
  .button {
    height: 50px;
    width: 100px;
    text-align: center;
    line-height: 40px;
  }
  .close-button-wrapper {
    width: 16px;
    height: 16px;
    position: absolute;
    text-align: center;
    line-height: 16px;
    right: 8px;
    top: 10px;
    box-sizing: border-box;
    border: 1px silver solid;
  }
}
</style>