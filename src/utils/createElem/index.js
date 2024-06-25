export const createGradientText = function (text, color1, color2) {
    return {
        type: 'gradientText',
        value: text,
        color1,
        color2,
        children: [{ text: '' }]  // void 元素必须有一个 children ，其中只有一个空字符串，重要！！！
    }
}