// var promiseAll = async function(functions) {
//     let newPromise = new Promise(async(resolve, reject)=>{
//         let result = []
//         var isError = false
//         for (let index = 0; index < functions.length; index++) {
//             const fn = await functions[index]()
//                 .then(res=> result.push(res))
//                 .catch(error => {reject(error)})
//                 resolve(result)
//             }
//         })
//     // console.log({newPromise})
//     return newPromise
// };

var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        // We know the resulting array will be the same length as functions
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
            .then(val => {
                results[i] = val;
                count++;
                if(count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason));
        });
    });
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    // () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]


const result =  promiseAll(functions).then(res=> console.log(res)).catch(e => console.error(e))
// console.log({result})?
