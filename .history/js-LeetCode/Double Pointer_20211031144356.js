var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let res = []
    return keys.reduce((prev, item) => {
        console.log(prev)
        res.push([
            ...words.filter(word => {
                return word
                    .toLowerCase()
                    .split('')
                    .every(chat => {
                        console.log(chat)
                        return item.includes(chat)
                    })
            })
        ])
        prev = [...prev, ...res]
    }, [])
};

let req = ["Hello", "Alaska", "Dad", "Peace"];
// let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
