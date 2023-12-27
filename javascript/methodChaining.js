var expect = function (val) {
    return {
        toBe: (param) => {
            if (param === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (param) => {
            if (param !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(6));
