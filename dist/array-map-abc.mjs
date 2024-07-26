"use strict";
/**
 * 数组原生的map方法的兼容性实现方法
 * @param {array} array 需要接受处理的原数组
 * @param {function} callback 生成新数组元素的函数
 * @param {*} [thisArg] 执行 callback 函数时值被用作this
 * @returns
 */
const arrayMap = (array, callback, thisArg) => {
  console.log('qwe ', 'mjs')
    let i = -1;
    const len = array.length;
    const resArray = [];
    while (++i < len) {
        resArray.push(callback.apply(thisArg, [array[i], i, array]));
    }
    return resArray;
};

export default arrayMap;
