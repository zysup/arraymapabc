// const path = require('path');
// console.log(path.join)
/**
 * 数组原生的map方法的兼容性实现方法
 * @param {array} array 需要接受处理的原数组
 * @param {function} callback 生成新数组元素的函数
 * @param {*} [thisArg] 执行 callback 函数时值被用作this
 * @returns
 */
var arrayMap = function (array, callback, thisArg) {
    var i = -1;
    var len = array.length;
    var resArray = [];
    while (++i < len) {
        resArray.push(callback.apply(thisArg, [array[i], i, array]));
    }
    return resArray;
};
