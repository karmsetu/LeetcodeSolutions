// var promiseAll = async function(functions) {
//     let resolvedArr = []
//     for (const fn of functions){
//         const func = await await fn().then(res => resolvedArr.push(res))
//         console.log({func})
//     }
//     return resolvedArr
// };

var promiseAll = async function(functions) {
    return await new Promise(async (resolve, reject)=> {
        try {
            let resolvedArr = []
            for (const fn of functions){
                const func = await fn().then(res => resolvedArr.push(res))
                console.log({func})
            }
            return resolvedArr
        } catch (error) {
            throw new Error(error)
        }
    })
};


const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]

// const result = await 
console.log(promiseAll(functions))