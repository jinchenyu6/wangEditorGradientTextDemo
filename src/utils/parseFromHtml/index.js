/**
 * 解析 HTML 字符串，生成“gradientText”元素
 * @param domElem HTML 对应的 DOM Element
 * @param children 子节点
 * @param editor editor 实例
 * @returns “渐变字体”元素，如上文的 gradientText
 */
function parseGradientTextHtml(domElem, children, editor) {                                                     // JS 语法

    // 从 DOM element 中获取“渐变字体”的信息
    const value = domElem.getAttribute('data-value') || ''
    const color1 = domElem.getAttribute('data-color1') || ''
    const color2 = domElem.getAttribute('data-color2') || ''
    // 生成“渐变字体”元素（按照此前约定的数据结构）
    const gradientText = {
        type: 'gradientText',
        value,
        color1,
        color2,
        children: [{ text: '' }], // void node 必须有 children ，其中有一个空字符串，重要！！！
    }

    return gradientText
}

export const parseGradientTextHtmlConf = {
    selector: 'span[data-w-e-type="gradientText"]', // CSS 选择器，匹配特定的 HTML 标签
    parseElemHtml: parseGradientTextHtml,
}