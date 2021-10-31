var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return keys.reduce((prev, item) => {
        console.log(prev)
        prev.push([
            ...words.filter(word => {
                return word
                    .toLowerCase()
                    .split('')
                    .every(key => item.includes(key))
            })
        ])
    }, [])
};

let req = ["Hello", "Alaska", "Dad", "Peace"];
// let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
