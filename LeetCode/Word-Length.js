/**
 * 声明一个函数 lengthOfLastWord 获取做后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let index = s.length - 1
   // 从字符串最后开始计算，一直到不为空结束
    while(s[index] === " ") {
        index -= 1
    }
    // 声明单词长度，开始计算单词长度，值为空时结束
    let wordLength = 0
    while(index >= 0&& s[index] !== " ") {
        wordLength += 1
        index -= 1
    }
    return wordLength
};