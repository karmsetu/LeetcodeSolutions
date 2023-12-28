function memoize(fn) {
    let memory = [];
    return function (...args) {
        let result;
        const isReapeatedArr = memory.map((memoArrElem) => {
            const crrElem = memoArrElem.input.map((elem, index) => {
                return elem === [...args][index];
            });
            const crrBool = crrElem.every((elem) => elem);
            if (crrBool) {
                console.log({ crrElem });
                result = memoArrElem.result;
            }
            return crrBool;
        });
        console.log({ isReapeatedArr });
        const isReapeated = isReapeatedArr.some((elem) => elem);
        console.log({ isReapeated });
        if (!isReapeated) {
            result = fn(...args);
            memory.push({ input: [...args], result });
        }
        console.log(memory);
        return result;
    };
}

// function memoize(fn) {
//     return function (...args) {
//         const result = fn(...args);
//         const newObj = { ...args, result };
//         const objKey = Object.keys({ ...args });
//         console.log({ newObj, objKey });
//     };
// }

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2);
memoizedSum(2, 2);
memoizedSum(2, 5);
memoizedSum(2, 2);
memoizedSum(2, 2);
memoizedSum(2, 2);
memoizedSum(2, 3);
