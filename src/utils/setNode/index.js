import { SlateElement, SlateTransforms } from "@wangeditor/editor";

export const setNode = (editor, type, obj) => {
    setTimeout(() => {
        SlateTransforms.setNodes(
            editor,
            obj,
            {
                match: (node) => {
                    // JS syntax
                    if (SlateElement.isElement(node)) {
                        if (node.type === type) {
                            return true; // 匹配 type
                        }
                    }
                    return false;
                },
                mode: "highest"
            }
        );
    }, 0)
}

