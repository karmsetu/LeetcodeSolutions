/*
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/

var compose = function (functions) {
    return function (x) {
        let element;
        for (let index = functions.length - 1; index > -1; index--) {
            const funcElement = functions[index];
            element = funcElement(x);
            x = element;
        }
        return x;
    };
};
