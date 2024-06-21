<template>
  <GradientTextInputModal
    v-if="isGradientTextInputMenuShow"
    @close="closeGradientTextInputMenu"
  ></GradientTextInputModal>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onFocus="handelFocus"
    />
  </div>
  <button @click="getHtml">获取HTML</button>
  <textarea cols="30" rows="10" :value="htmlContent"></textarea>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import GradientTextInputModal from "@/components/gradientTextInputModal.vue";

export default {
  components: { Editor, Toolbar, GradientTextInputModal },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("");

    let isGradientTextInputMenuShow = ref(false);

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      // setTimeout(() => {
      //   valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
      // }, 1500);
    });

    const toolbarConfig = {};
    toolbarConfig.insertKeys = {
      index: 5, // 插入的位置，基于当前的 toolbarKeys
      keys: ["gradientTextMenu"],
    };
    const editorConfig = { placeholder: "请输入内容..." };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
      console.log(editor);
      editor.on("onClickGradientTextMenu", () => {
        console.log(456);
        isGradientTextInputMenuShow.value = true;
      });
    };
    const handelFocus = (editor) => {
      // editor.restoreSelection();
      console.log(editor.selection);
      // editor.move(1);
      // editor.move(1);
    };

    const htmlContent = ref("");

    const getHtml = () => {
      console.log(editorRef.value.getHtml());
      htmlContent.value = editorRef.value.getHtml();
    };

    const closeGradientTextInputMenu = () => {
      isGradientTextInputMenuShow.value = false;
    };

    return {
      editorRef,
      valueHtml,
      mode: "simple", // 或 'default'
      toolbarConfig,
      editorConfig,
      htmlContent,
      isGradientTextInputMenuShow,
      handleCreated,
      getHtml,
      handelFocus,
      closeGradientTextInputMenu,
    };
  },
};
</script>    

<style scoped>
button {
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
</style>
