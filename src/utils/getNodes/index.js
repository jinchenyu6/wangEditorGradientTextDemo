import { SlateEditor, SlateElement } from "@wangeditor/editor";

//获取选中的node
export const getNodes = (editor, type) => {
    const nodeEntries = SlateEditor.nodes(editor, {
        match: (node) => {
            if (SlateElement.isElement(node)) {
                if (node.type === type) {
                    return true; // 匹配 gradientText
                }
            }
            return false;
        },
        universal: true,
    });
    let nodes = [];
    if (nodeEntries == null) {
        console.log(`当前未选中 ${type}`);
    } else {
        for (let nodeEntry of nodeEntries) {
            const [node] = nodeEntry;
            nodes.push(node)
        }
    }
    return nodes;
};