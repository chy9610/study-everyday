var longestSubsequence = function(arr, difference) {
    const map = new Map();
    let ans = 1;
    for(const num of arr){
        if(map.has(num - difference)){
            const v = map.get(num-difference) + 1;
            console.log('v ==>  ', v)
            map.set(num, v);
            ans = Math.max(ans, v);
            console.log('ans ##> ',ans)
        }else
            map.set(num, 1);
            console.log('map **> ', map.entries())
    }
    return ans;
};

let res = longestSubsequence([1,2,3,4,5,6], 2)
console.log('结果： ', res)