
/**
 * 延时定时 -- 防抖处理
 * @param {Object} func 回调函数
 * @param {Number} wait 延时时间
 */
 function setTimeOutFn(func, wait = 1000) {
    let time;
    return function () {
        let current = this
        let arg = arguments
        if (time) clearInterval(time)
        time = setTimeout(() => {
            // console.log("延时定时器", current)
            // console.log("实参", arg)
            func.apply(current, arg)
        }, 1000)
    }
}
function setText(text) {
    console.log(text)
}
let a = setTimeOutFn(setText, 1000)
a("Hello Word")