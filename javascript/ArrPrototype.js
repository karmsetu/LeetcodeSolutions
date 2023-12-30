// Array.prototype.last = function() {
//     if(!this.length){return -1}
//     console.log(this)
//     return this[this.length-1]
// };
Array.prototype.last = function() {
    return !this.length ? -1 : this[this.length-1]
};
const one = [1,223,4,5,6]
console.log(one.last())