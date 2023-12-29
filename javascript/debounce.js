var debounce = function (fn, t) {
    let isRunning = false;
    let runningFn
    return function (...args) {
        if (!isRunning) {
            isRunning = true
            runningFn = setTimeout(()=> {
                fn(...args)
                isRunning = false
            }, t)
        } else {
            clearTimeout(runningFn)
            runningFn = setTimeout(()=> {
                fn(...args)
                isRunning = false
            }, t)
        }
    };
};
