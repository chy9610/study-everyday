var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    // 循环字母行的类数组
    return keys.reduce((prev, item) => {
        // 扁平化可添加的数组
        prev = [...prev,
        // 筛选字母在一行的单词
        ...words.filter(word => {
            // 对单个的字母进行匹配查询返回 true（当行字母的单词项）
            return word
                .toLowerCase()
                .split('')
                .every(chat => {
                    console.log(chat)
                    return item.includes(chat)
                })
        })
        ]
        return prev
    }, [])
};

let req = ["Hello", "Alaska", "Dad", "Peace"];
// let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
