var promiseAll = async function(functions) {
    let result = []
    for (let index = 0; index < functions.length; index++) {
        try {
            const fn = functions[index]
            console.log(fn)
            const functionToBeReturned = await fn()
            result.push(functionToBeReturned)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(result)
    return result
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
promiseAll(functions)