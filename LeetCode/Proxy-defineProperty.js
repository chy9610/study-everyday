// 实现代理对象
const data = {
    name: 'haha'
}

const computed = {
    age: 14
}

// 问题：
// 要求创建一个新对象 ctr 
// console.log(ctr.age)    14
// data.name = "xiaohong"
// console.log(ctr.name)  xiaohong 


// 使用 Object.defineProperty() 监听对象
// const ctr = {}
// const handleCtr = (target, prop) => {
//     Object.keys(prop).forEach(key => {
//         Object.defineProperty(target, key,{
//             get() {
//                 return prop[key]
//             }
//         })
//     })
// }
// handleCtr(ctr, data)
// handleCtr(ctr, computed)


// 使用 Proxy 实现对象监听
const handle = {
    get(target, prop) {
        for (const key in target) {
            if (target[key][prop]) {
                return target[key][prop]
            }
        }
    }
}
const ctr = new Proxy({
    data,
    computed
}, handle)



console.log(ctr.age)
data.name = "xiaohong"
console.log(ctr.name)