import { h } from 'snabbdom'

/**
 * 渲染“附件”元素到编辑器
 * @param elem 附件元素，即上文的 myResume
 * @param children 元素子节点，void 元素可忽略
 * @param editor 编辑器实例
 * @returns vnode 节点（通过 snabbdom.js 的 h 函数生成）
 */
// function renderGradientText(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {  // TS 语法
function renderGradientText(elem, children, editor) {                                                // JS 语法
    // 获取“附件”的数据，参考上文 myResume 数据结构
    const { value = '' } = elem

    const Vnode = h(
        'span',
        {
            props: { contentEditable: true }, // HTML 属性，驼峰式写法
            style: { background: 'linear-gradient(180deg,#666,#feab3a)', backgroundClip: 'text', color: 'transparent' /* 其他... */ }, // style ，驼峰式写法  
            on: {
                click() {
                    editor.restoreSelection();
                    editor.move(1)
                    //需要再判断这块是否是空格 如果是的话则无需添加
                    editor.insertText(' ') //处理插入渐变文本，直接blur,再focus后，渐变文本之后的光标丢失
                }
            }
        },
        value
    )

    return Vnode
}

export const renderGradientTextConfig = {
    type: 'gradientText',
    renderElem: renderGradientText
}