var cancellable = function (fn, args, t) {
    // setTimeout(cancelFn, )
    const cancelFun = () => {
        console.log(`cancel func has been called`);
        clearInterval(timer);
    };
    const timer = setInterval(() => {
        fn(...args);
        console.log(fn(args));
        console.log(...args);
    }, t);
    console.log(cancelFun);
    return cancelFun;
};
const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);

/**
 *  const cancellable = function(fn, args, t) {
    // cancelFn function//
    const cancelFn = function (){
        clearTimeout(timer);
    };
    const timer = setTimeout(()=>{
        fn(...args)
    }, t);
    return cancelFn ;
    };
 */
