数组原生的map方法在第5版中被添加到ECMA-262标准中;因此，它可能不存在于所有标准的实现中。这就是 `array-map-abc` 存在的原因，这个方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

以下是`array-map-abc`的一些优点
- 简单
- 兼容性强
- 体积小(gzip压缩后不到0.5KB)
- 使用ts语法，有强大的代码提示和类型验证
- 0 Dependencies

妈妈再也不用担心我不会用map方法了✌️

### 语法
```js
let new_array = arrayMap(arr, function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
```

### 示例
```js
const arrayMap = require("array-map-abc")
let arr = [1, 3, 5]
let new_array = arrayMap(arr, function(item) {
  return item * 2
})
// expected output: Array [2, 6, 10]
```

### 参数
`arr`<br/>
&emsp;需要接受处理的原数组<br/>
`callback`<br/>
&emsp;生成新数组元素的函数，使用三个参数：<br/>
&emsp;&emsp;`currentValue`: `callback` 数组中正在处理的当前元素。<br/>
&emsp;&emsp;`index`(可选): `callback` 数组中正在处理的当前元素的索引。<br/>
&emsp;&emsp;`thisArg`(可选): 在`callback`方法中指向需要处理的原数组(即第一个参数)。<br/>
`thisArg`(可选)<br/>
&emsp;执行 callback 函数时值被用作this。<br/>

### 返回值
一个由原数组每个元素执行回调函数的结果组成的新数组。

---

创作不易，如果您用的舒心，可以联系我捐赠，分享给您的朋友🙏 <br/> 
本人精通javascript变量命名，如果您有什么疑问，也可以给我发邮件，免费教学