import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Boot, DomEditor } from "@wangeditor/editor";
import { renderGradientTextConfig } from "@/utils/renderElem/index.js";
import { gradientTextMenuConf } from "@/config/menu/index.js";
import { withGradientText } from "@/utils/editorPlugin/index.js";
import { gradientTextToHtmlConf } from '@/utils/elemToHtml/index.js'
import { parseGradientTextHtmlConf } from '@/utils/parseFromHtml/index.js'

const module = {
    // JS 语法
    menus: [gradientTextMenuConf], // 菜单
    editorPlugin: withGradientText, // 插件
    renderElems: [renderGradientTextConfig], // renderElem
    elemsToHtml: [gradientTextToHtmlConf],
    parseElemsHtml: [parseGradientTextHtmlConf]
};
Boot.registerModule(module);

createApp(App).mount('#app')
