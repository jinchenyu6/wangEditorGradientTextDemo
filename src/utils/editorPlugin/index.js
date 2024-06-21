import { DomEditor, SlateTransforms } from '@wangeditor/editor'


// function withGradientText<T extends IDomEditor>(editor: T) {  // TS 语法
export function withGradientText(editor) {                        // JS 语法
    const { isInline, isVoid, normalizeNode, insertText } = editor
    const newEditor = editor

    newEditor.isInline = elem => {
        const type = DomEditor.getNodeType(elem)
        if (type === 'gradientText') return true // 针对 type: withGradientText ，设置为 inline
        return isInline(elem)
    }

    newEditor.isVoid = elem => {
        const type = DomEditor.getNodeType(elem)
        if (type === 'gradientText') return true // 针对 type: withGradientText ，设置为 void
        return isVoid(elem)
    }

    //重写 normalize
    // newEditor.normalizeNode = ([node, path]) => {
    //     const type = DomEditor.getNodeType(node);
    //     if (type !== 'gradientText') {
    //         // 未命中 gradientText ，执行默认的 normalizeNode
    //         return normalizeNode([node, path]);
    //     }

    //     // editor 顶级 node
    //     const topLevelNodes = newEditor.children || [];

    //     // --------------------- gradientText 后面必须跟一个 p header blockquote（否则后面无法继续输入文字） ---------------------
    //     const nextNode = topLevelNodes[path[0] + 1] || {};
    //     const nextNodeType = DomEditor.getNodeType(nextNode);
    //     if (nextNodeType !== 'paragraph' && nextNodeType !== 'blockquote' && !nextNodeType.startsWith('header')) {
    //         // gradientText node 后面不是 p 或 header ，则插入一个空 p
    //         const p = { type: 'paragraph', children: [{ text: '' }] };
    //         const insertPath = [path[0] + 1];
    //         SlateTransforms.insertNodes(newEditor, p, {
    //             at: insertPath // 在 link-card 后面插入
    //         });
    //     }
    // };


    return newEditor // 返回 newEditor ，重要！！！
}


