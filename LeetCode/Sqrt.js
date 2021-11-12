/**
 * 获取平方数（非负整数）
 * @param {number} x 被平方数
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return 0
    }
    let l = 0, r = x;
    while (l < r) {
        let mid = l + r + 1 >> 1
        if (mid <= x / mid) {
            l = mid;
        } else {
            r = mid - 1
        }
    }
    return l
};
mySqrt(165816)