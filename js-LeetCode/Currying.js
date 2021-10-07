/**
 * “闭包思路” 实现 “柯里化”
 * @param {Function} fn   回调函数
 * @param {Number} len  参数个数（arguments） 
 * @returns {Function}
 */
function curry(fn, len = fn.length) {
    // 返回函数，并设定 arguments 的个数
    return _curry(fn, len)
}

/**
 * 
 * @param {Function} func   回调函数
 * @param {Number} len      参数个数（arguments） 
 * @param  {...any} arg     解构参数（单值）
 * @returns {Function}      
 */
function _curry(func, len, ...arg) {
    return function (...params) {
        // 合并实参
        let _arg = [...arg, ...params]
        console.log('函数参数 arguments', _arg)

        if (_arg.length >= len) {
            // 如果实参个数大于或等于形参个数，则通过整体（数组）的形式劫持。
            return func.apply(this, _arg)
        } else {
            // 如果实参个数小于形参个数，则通过解构（单值）的形式劫持。
            return _curry.call(this, func, len, ..._arg)
        }
    }
}

let fn = curry(function (a, b, c, d) {
    console.log('和 ->', a + b + c + d)
})


fn(1, 2, 3, 4)
fn(1, 2, 3)(4)
fn(1, 2)(3, 4)
fn(1)(2, 3, 4)
fn(1, 2)(3)(4)