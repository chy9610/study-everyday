var findWords = function (words) {
    const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return keys.reduce((prev, item) => {
        prev = [...prev,
        ...words.filter(word => {
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

// let req = ["Hello", "Alaska", "Dad", "Peace"];
let req = ['a', 'b'];
let res = findWords(req)
console.log(res)
