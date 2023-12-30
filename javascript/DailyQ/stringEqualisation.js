var makeEqual = function(words) {
    let ln = words.join('').split('') //? joins all the letters and then seperates them
    const sz = words.length
    let arrSet
    console.log({ln, sz})
    const getOccurence=(arr)=> {
        arrSet = new Set(arr)
        let objArr = {}
        arrSet.forEach(item=> {
                objArr[item]= (arr.filter(elem=> elem===item).length)
        })
        return objArr
        console.log({arrSet, objArr})
    }
    let arrLItr = getOccurence(ln)
    console.log(arrLItr)
    let modSz = []
    for (const [key, value] of Object.entries(arrLItr)) {
        modSz.push(value%sz===0?true: false)
    }
    console.log(modSz)
    // console.log(modSz)
    // checking possibility
    const isModSz = modSz.every(res=> true)
    let returningArr = []
    console.log({isModSz})
    if (ln.length%sz===0 && isModSz) {
        let newWord = []
        for (const [key, value] of Object.entries(arrLItr)) {
            for (let index = 0; index < (value/sz); index++) {
                newWord.push(String(key))
                console.log({key})
            }
        }
        for (let index = 0; index < sz; index++) {
            returningArr.push(newWord.join(''))            
        }
        return true
    } else {
        throw new Error()
    }
    /**
     * TODO 1.) we are going to check if it is possible to distribute or not:
     * ? for that we will need: 
        * ? 1.) ln(total no. of letters) 
        * ? 2.) sz(size of array)
        * ? 3.) arrLItr (array of iteration of each letter; for ex: [{a:3} , {b:3}, {c:3}])
     * ? if (ln % sz === 0 && forEach of arrLItr.element%sz) then it is possible hence not
     * TODO 2.) How to do it
     * create a new constant and add the letter(from arrLitr) by using:
     * arrLItr/sz = the number of times the letter is to be added to the constant
     */
};
words = ["abcd","aabc","bcd", "ddddd"]
console.log(makeEqual(words))
// ?: we would be given an array of word(strings) and we need to move an letter from the word to make them equal