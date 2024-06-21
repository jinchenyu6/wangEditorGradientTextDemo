export const createGradientText = function (text) {
    return {
        type: 'gradientText',
        value: text,
        children: [{ text: '' }]  // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
    }
}