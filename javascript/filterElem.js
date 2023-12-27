var filter = function (arr, fn) {
    let array = [];
    arr.map((item, index) => {
        fn(item, index) ? array.push(item) : null;
    });
    return array;
};

function greaterThan10(n) {
    return n > 10;
}

module.exports = {
    filter,
    greaterThan10,
};
/* Most Shortest method
var filter = function(arr, fn) {
    return arr.flatMap((i, j) => fn(i, j) ? [i] : []);
};
*/

/* Most Fastest method
var filter = function(arr, fn) {
    const filteredArr = [];
    let filteredIndex = 0;
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr[filteredIndex] = arr[i];
            filteredIndex++;
        }
    }  
    return filteredArr;
};
*/
