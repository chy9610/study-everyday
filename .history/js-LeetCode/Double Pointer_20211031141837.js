var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return words.reduce((prev, item) => {
        let arr = item.toLowerCase().split('')
        let keysIndex = 0;
        let isPush = false
        for (let index = 0; index < arr.length; index++) {
            // 判断此字母是否存在当前的字符串中，如果存在打开开关 isPush，是否可以push
            if (keys[keysIndex].indexOf(arr[index]) >= 0) {
                console.log(arr[index])
                index += 1
                isPush = true
            } else {
                if (keysIndex < keys.length - 1) {
                    keysIndex += 1
                } else {
                    return prev
                }
                // 出现换行行为则暂停循环
                if (isPush) {
                    isPush = false
                    keysIndex = 0
                    return prev
                }
            }
        }
        if (!isPush) prev.push(item)
        return prev
    }, [])
};

let res = findWords(['a', 'b'])
console.log(res)
