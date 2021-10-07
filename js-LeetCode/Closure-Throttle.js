/**
 * 节流
 * @param {String} func     回调函数
 * @param {Number} timeout  延时时间
 * */
function throttle(fn, timeout) {
    let timer;
    return function (...arg) {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arg)
            timer = null
        }, timeout)
    }
}