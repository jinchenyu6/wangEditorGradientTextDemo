<template>
  <el-form :model="form" class="form">
    <el-icon class="close-button-wrapper" @click="onClose"><Close /></el-icon>
    <el-form-item label="文本">
      <el-input v-model="form.value" placeholder="请输入..." clearable />
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
    <el-form-item label="示例">
      <span
        class="sample-text"
        :style="{
          background: `linear-gradient(${form.color1}, ${form.color2}) text`,
        }"
        >{{ form.value }}</span
      >
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref, defineEmits, toRaw } from "vue";
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
  value: "",
  color1: "rgb(255, 69, 0)",
  color2: "rgb(255, 140, 0)",
});

const emits = defineEmits(["close", "submit"]);

const onSubmit = () => {
  console.log("submit!");
  emits("submit", toRaw(form));
};

const onClose = () => {
  emits("close");
};
</script>


<style lang="scss" scoped>
.form {
  width: 310px;
  height: auto;
  background-color: rgb(251, 251, 251);
  border: 1px silver solid;
  padding: 20px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 2;
  .el-input {
    --el-input-width: 220px;
  }
  .sample-text {
    color: transparent;
    font-size: 20px;
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

