<template>
  <el-form :model="form" class="form">
    <el-icon class="close-button-wrapper" @click="onClose"><Close /></el-icon>
    <el-form-item label="文本">
      <el-input v-model="form.content" placeholder="请输入..." clearable />
    </el-form-item>
    <el-form-item label="Color1">
      <el-color-picker
        v-model="form.color1"
        show-alpha
        :predefine="predefineColors"
      />
    </el-form-item>
    <el-form-item label="Color2">
      <el-color-picker
        v-model="form.color2"
        show-alpha
        :predefine="predefineColors"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Close } from "@element-plus/icons-vue";
const predefineColors = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
]);

const form = reactive({
  content: "",
  color1: "rgba(255, 69, 0, 0.68)",
  color2: "rgba(30, 144, 255, 1)",
});

const onSubmit = () => {
  console.log("submit!", form);
};

const onClose = () => {
  console.log("关闭");
};
</script>


<style lang="scss" scoped>
.form {
  width: 310px;
  height: 200px;
  background-color: #f6f6f6;
  border: 1px silver solid;
  padding: 20px;
  position: relative;
  .el-input {
    --el-input-width: 220px;
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
.form .el-input {
  --el-input-width: 220px;
}
</style>

