import { createGradientText } from '@/utils/createElem/index.js'
// class MyModalMenu implements IModalMenu {    // TS 语法
class GradientTextMenu {                       // JS 语法

    constructor() {
        this.title = '插入渐变字体'
        // this.iconSvg = '<svg >...</svg>'
        this.tag = 'button'
        // this.showModal = true
        // this.modalWidth = 300
    }

    // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
    // isActive(editor: IDomEditor): boolean {    // TS 语法
    isActive(editor) {                      // JS 语法
        return false
    }

    // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
    // getValue(editor: IDomEditor): string | boolean {    // TS 语法
    getValue(editor) {                               // JS 语法
        return ''
    }

    // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
    // isDisabled(editor: IDomEditor): boolean {   // TS 语法
    isDisabled(editor) {                     // JS 语法
        return false
    }

    // 点击菜单时触发的函数
    // exec(editor: IDomEditor, value: string | boolean) {   // TS 语法
    exec(editor, value) {                              // JS 语法
        // Modal menu ，这个函数不用写，空着即可
        console.log('点击菜单')
        editor.emit('onClickGradientTextMenu')
    }

    // 弹出框 modal 的定位：1. 返回某一个 SlateNode； 2. 返回 null （根据当前选区自动定位）
    // getModalPositionNode(editor: IDomEditor): SlateNode | null {  // TS 语法
    // getModalPositionNode(editor) {                             // JS 语法
    //     return null // modal 依据选区定位
    // }

    // 定义 modal 内部的 DOM Element
    // getModalContentElem(editor: IDomEditor): DOMElement {   // TS 语法
    // getModalContentElem(editor) {                        // JS 语法
    //     // 创建输入框
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'text');

    //     // 创建按钮
    //     const button = document.createElement('button');
    //     button.textContent = '确定';

    //     // 点击按钮时获取输入框内容
    //     button.addEventListener('click', function () {
    //         const inputValue = input.value;
    //         console.log('输入框内容：', inputValue);
    //         // 在这里可以对输入框内容进行进一步处理
    //         editor.restoreSelection()          // 恢复选区
    //         editor.insertNode(createGradientText(inputValue, '#FFF', '#000'))
    //         editor.move(1)
    //         editor.hidePanelOrModal()
    //     });

    //     // 创建一个包含输入框和按钮的 div 元素
    //     const container = document.createElement('div');
    //     container.appendChild(input);
    //     container.appendChild(button);


    //     return container // 返回 DOM Element 类型

    //     // PS：也可以把 $content 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
    // }
}

export const gradientTextMenuConf = {
    key: 'gradientTextMenu', // 定义 menu key ：要保证唯一、不重复（重要）
    factory() {
        return new GradientTextMenu() // 把 `YourMenuClass` 替换为你菜单的 class
    },
}