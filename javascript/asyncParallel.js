var promiseAll = async function(functions) {
    let newPromise = new Promise(async(resolve, reject)=>{
        let result = []
        var isError = false
        for (let index = 0; index < functions.length; index++) {
            try {
                const fn = functions[index]
                console.log(fn)
                const functionToBeReturned = await fn()
                result.push(functionToBeReturned)
                console.log(result)
            } catch (error) {
                isError = true
                reject(error)
                break
            }
        }
        if(!isError) {resolve(result)}
    }).catch(e => {
        console.error(e)
        return e
    })
    return newPromise
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

try {
    promiseAll(functions)
} catch (error) {
    console.error({error})
}