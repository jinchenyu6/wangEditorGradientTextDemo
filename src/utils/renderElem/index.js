import { h } from 'snabbdom'
import { SlateEditor, SlateElement, SlateTransforms } from "@wangeditor/editor";
/**
 * 渲染“渐变字体”元素到编辑器
 * @param elem 附件元素，即上文的 GradientText
 * @param children 元素子节点，void 元素可忽略
 * @param editor 编辑器实例
 * @returns vnode 节点（通过 snabbdom.js 的 h 函数生成）
 */
// function renderGradientText(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {  // TS 语法
function renderGradientText(elem, children, editor) {                                                // JS 语法
    // 获取“渐变字体”的数据，参考上文 GradientText 数据结构
    const { value = '', color1, color2 } = elem

    const Vnode = h(
        'span',
        {
            props: { contentEditable: true }, // HTML 属性，驼峰式写法
            style: { background: `linear-gradient(${color1}, ${color2}) text`, color: 'transparent' /* 其他... */ }, // style ，驼峰式写法  
            on: {
                click(e) {
                    //停止冒泡
                    e.stopPropagation()
                    editGradientText(editor)
                }
            }
        },
        value
    )

    return Vnode
}

function editGradientText(editor) {
    editor.emit('onClickGradientText')
}

export const renderGradientTextConfig = {
    type: 'gradientText',
    renderElem: renderGradientText
}