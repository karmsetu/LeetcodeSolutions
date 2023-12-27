// var reduce = function (nums, fn, init) {
//     let returnVal = init;
//     nums.forEach((element) => {
//         init = fn(returnVal, element);
//         returnVal = init;
//     });
//     return init;
// };

var reduce = function (nums, fn, init) {
    let element;
    for (let index = 0; index < nums.length; index++) {
        element = fn(init, nums[index]);
        init = element;
    }
    return init;
};
