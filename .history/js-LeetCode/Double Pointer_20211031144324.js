var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let res = []
    return keys.reduce((prev, item) => {
        console.log(prev)
        prev.push([
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
    }, [])
};

let req = ["Hello", "Alaska", "Dad", "Peace"];
// let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
