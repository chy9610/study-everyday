/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration, index, arr) {
    // duration= 2 ==> timeSeries: [1,2] answer: 3 ==> [1,3] 4 ==> [1,4] 4
    let expired = 0;
    return timeSeries.reduce((prev, item) => {
        // 当前秒数是否大于等于中毒结束时间
        if (item >= expired) {
            // 中毒总时间 = 总时间 + 步值
            prev += duration;
        } else {
            // 中毒总时间 = 当前秒数 + 步值 - 中毒结束时间 
            prev += item + duration - expired;
        }
        // 中毒结束时间 = 当前秒数 + 步值
        expired = item + duration;
        return prev
    }, 0)
};

let res = findPoisonedDuration([1, 7], 2)
console.log(res)