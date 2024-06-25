import { SlateElement } from '@wangeditor/editor'

/**
 * 生成“附件”元素的 HTML
 * @param elem 附件元素，即上文的 gradientText
 * @param childrenHtml 子节点的 HTML 代码，void 元素可忽略
 * @returns “附件”元素的 HTML 字符串
 */
function gradientTextToHtml(elem, childrenHtml) {                             // JS 语法

    // 获取附件元素的数据
    const { value, color1, color2 } = elem

    // 生成 HTML 代码
    const html = `<span data-w-e-type="gradientText" data-w-e-is-void data-w-e-is-inline data-value="${value}" data-color1="${color1}" data-color2="${color2}" style="background: linear-gradient(${color1}, ${color2}) text; color: transparent;">${value}</span>`

    return html
}

export const gradientTextToHtmlConf = {
    type: 'gradientText', // 新元素的 type ，重要！！！
    elemToHtml: gradientTextToHtml,
}