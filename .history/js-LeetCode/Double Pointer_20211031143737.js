var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return keys.reduce((prev, item) => {
        prev.push([
            ...words.fillter(word => {
                return word
                    .toLowerCase()
                    .split("")
                    .every(key => key.includes(key))
            })
        ])
    }, [])
};

let req = ["Hello", "Alaska", "Dad", "Peace"];
// let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
