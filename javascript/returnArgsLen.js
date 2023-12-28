var once = function (fn) {
    return function (...args) {
        let b = [...args];
        return b[0];
    };
};

var once = function (fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
};

console.log(
    once((a, b, c) => a + b + c),
    [
        [1, 2, 3],
        [2, 3, 6],
    ]
);
