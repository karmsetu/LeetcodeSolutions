var createCounter = function (init) {
    var crrInit = init;

    return {
        increment: () => {
            return ++crrInit;
        },
        reset: () => {
            crrInit = init;
            return crrInit;
        },
        decrement: () => {
            return --crrInit;
        },
    };
};

const count = createCounter(0);
console.log(count.increment());
console.log(count.reset());
console.log(count.decrement());
