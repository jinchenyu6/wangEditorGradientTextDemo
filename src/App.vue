<template>
  <div class="rich-text-wrapper" style="border: 1px solid #ccc">
    <GradientTextInputModal
      v-if="isGradientTextInputMenuShow"
      @close="closeGradientTextInputMenu"
      @submit="handelSubmit"
    ></GradientTextInputModal>
    <GradientTextEditModal
      v-if="isGradientTextEditMenuShow"
      @close="closeGradientTextEditMenu"
      @edit="showGradientTextInputMenuToEdit"
    ></GradientTextEditModal>
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      id="editor"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onFocus="handelFocus"
    />
  </div>
  <button @click="getHtml">GetHTML</button>
  <button @click="setHtml">SetHTML</button>
  <textarea cols="30" rows="10" :value="htmlContent"></textarea>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { createGradientText } from "@/utils/createElem/index.js";
import { getNodes } from "@/utils/getNodes/index.js";
import { setNode } from "@/utils/setNode/index.js";
import { DomEditor } from "@wangeditor/core";
import GradientTextInputModal from "@/components/gradientTextInputModal.vue";
import GradientTextEditModal from "@/components/gradientTextEditModal.vue";
export default {
  components: {
    Editor,
    Toolbar,
    GradientTextInputModal,
    GradientTextEditModal,
  },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("");

    let isGradientTextInputMenuShow = ref(false);
    let isGradientTextEditMenuShow = ref(false);
    let isEditing = ref(false);

    onMounted(() => {});

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
      editor.on("onClickGradientTextMenu", () => {
        isGradientTextInputMenuShow.value = true;
      });
      editor.on("onClickGradientText", () => {
        isGradientTextEditMenuShow.value = true;
      });
      //尝试监听编辑器左键点击 选区设置
      document.getElementById("editor").addEventListener("click", (e) => {
        hideModals();
        //DomEditor.isSelectedVoidNode(editor)
        if (DomEditor.getSelectedTextNode(editor) === null) {
          setTimeout(() => {
            editor.restoreSelection();
            editor.move(1);
          }, 0);
        }
      });
    };

    const handelFocus = (editor) => {};

    const handelSubmit = (form) => {
      if (isEditing.value) {
        editGradientText(form);
      } else {
        createGradientTextByInput(form);
      }
    };

    //生成渐变字体
    const createGradientTextByInput = (form) => {
      const { value = "", color1, color2 } = form;
      let editor = editorRef.value;
      //解决input渐变字体后 光标在前的bug
      setTimeout(() => {
        editor.restoreSelection();
        editor.insertNode(createGradientText(value, color1, color2));
        editor.move(1);
      }, 0);
      closeGradientTextInputMenu();
    };

    //编辑已经插入编辑器中的渐变字体
    const editGradientText = (form) => {
      setNode(editorRef.value, "gradientText", form);
      closeGradientTextInputMenu();
    };

    //获取点击的渐变字体node
    const getGradientTextNode = () => {
      let nodes = getNodes(editorRef.value, "gradientText");
      return nodes[0];
    };
    const showGradientTextInputMenuToEdit = () => {
      isGradientTextInputMenuShow.value = true;
      isGradientTextEditMenuShow.value = false;
      isEditing.value = true;
    };
    //关闭modal
    const closeGradientTextInputMenu = () => {
      isGradientTextInputMenuShow.value = false;
      editorRef.value.focus();
    };
    const closeGradientTextEditMenu = () => {
      isGradientTextEditMenuShow.value = false;
      isEditing.value = false;
      editorRef.value.focus();
    };
    const hideModals = () => {
      closeGradientTextInputMenu();
      closeGradientTextEditMenu();
    };

    const htmlContent = ref("");

    const getHtml = () => {
      htmlContent.value = editorRef.value.getHtml();
    };
    const setHtml = () => {
      editorRef.value.setHtml(htmlContent.value);
    };

    return {
      editorRef,
      valueHtml,
      mode: "simple", // 或 'default'
      toolbarConfig,
      editorConfig,
      htmlContent,
      isGradientTextInputMenuShow,
      isGradientTextEditMenuShow,
      handleCreated,
      getHtml,
      setHtml,
      handelFocus,
      handelSubmit,
      closeGradientTextInputMenu,
      closeGradientTextEditMenu,
      createGradientTextByInput,
      editGradientText,
      showGradientTextInputMenuToEdit,
    };
  },
};
</script>    

<style lang="scss" scoped>
.rich-text-wrapper {
  border: 1px solid #ccc;
  position: relative;
}
button {
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 40px;
}
textarea {
  display: block;
  width: 100%;
}
</style>