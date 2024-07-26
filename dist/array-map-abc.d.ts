declare const path: any;
/**
 * 数组原生的map方法的兼容性实现方法
 * @param {array} array 需要接受处理的原数组
 * @param {function} callback 生成新数组元素的函数
 * @param {*} [thisArg] 执行 callback 函数时值被用作this。
 * @returns
 */
declare const arrayMap: <T, U>(array: T[], callback: (item: T, index: number, arr: readonly T[]) => U, thisArg?: any) => U[];
