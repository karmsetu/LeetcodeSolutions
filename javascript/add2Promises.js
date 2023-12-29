(promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
    (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)));

var addTwoPromises = async function (promise1, promise2) {
    let p1;
    let p2;
    try {
        p1 = await promise1;
        p2 = await promise2;
    } catch (error) {
        throw new Error("something went wrong");
    }
    return p1 + p2;
};

console.log(addTwoPromises(promise1, promise2));
