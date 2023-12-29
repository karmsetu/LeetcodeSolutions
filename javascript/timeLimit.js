var timeLimit = function (fn, t) {
    return async function (...args) {
        let isPending = true;
        const isReady = fn(...args);
        Promise.resolve(isReady).then(() => {
            isPending = false;
        });
        setTimeout(() => {
            console.log(isPending);
            if (isPending) {
                console.error(`Time Limit Exceeded`);
                // throw new Error(`Time Limit Exceeded`);
            } else {
                return isReady;
            }
        }, t);
    };
};
fn = async (n) => {
    await new Promise((res) => setTimeout(res, 200));
    const result = n * n;
    return { result };
};
inputs = [5];
t = 250;
const test = timeLimit(fn, t);
test(inputs);

/**
 * Correct solution
 * var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

            return Promise.race([originalFnPromise, timeoutPromise]);
        }
    };

 */
