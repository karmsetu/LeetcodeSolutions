var TimeLimitedCache = function() {
    let arrKeyVal = []
    this.arrKeyVal = arrKeyVal
    console.log(`class initiated`)
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

/**
 *TODO: The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const crrArr = this.arrKeyVal
    const crrTime = new Date().getTime()
    let result;
    if(!crrArr[0]){
        crrArr.push({
                recordTime: new Date().getTime(),
                duration: duration,
                pair: {[key]: value}
            })
        result = false
    } else {

        this.arrKeyVal.map(entry=> {
            const pair = entry.pair
            console.log({entry, pair})
        console.log(`forEach`)
        const condition = (crrTime-entry.recordTime)<= entry.duration
        if (Object.keys(entry.pair)[0] === String(key)) {
            console.log(`key already exists`)
            entry.pair[key] = value;
            entry.duration = duration;
            entry.recordTime = new Date().getTime()
            if (condition) {
                result= true
            } else result= false
        } else {
            result = false
            crrArr.push({
                recordTime: new Date().getTime(),
                duration: duration,
                pair: {[key]: value}
            })
        }
    })
    console.log({key, value, duration,crrArr})
}
return result
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let result;
    const crrTime = new Date().getTime()
    this.arrKeyVal.forEach(entry=> {
        const recordTime = entry.recordTime
        const condition = (crrTime - recordTime)<= entry.duration
        const duration =  entry.duration
        const timeElapsed = crrTime - recordTime
        const checkingPair =Object.keys(entry.pair)[0]
        console.log({crrTime,condition, recordTime, duration, timeElapsed, checkingPair, key})
        if (checkingPair === String(key)) {
            console.log(`success`)
            if (condition) {
                console.log(`found the key: ${entry.pair[key]} `)
                result= entry.pair[key]
            } else {
                console.log(`the key has elapsed`)
                result= -1
            }
        } else {
            console.log(`Key was not found in first place`)
            result= -1
        }
    })
    return result
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    var count = 0
    const crrTime = new Date().getTime()
    this.arrKeyVal.forEach(entry=> {
        if ((crrTime-entry.recordTime)<= entry.duration) {
            console.log(`count++`)
            count++
        }
    })
    console.log({count})
    return count
};

/**
 */

/**
 * TODO: Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
*/

const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000); // false
// setTimeout(()=> {
//     const result = timeLimitedCache.get(1)
//     console.log({result})
// }, 20)
// timeLimitedCache.count() // 1
// 42

// ["TimeLimitedCache", "set", "set", "get", "get", "count"]
// [[], [123456789, 987654321, 250], [123456788, 987654320, 100], [123456788], [123456789], []]
// [0, 0, 0, 50, 150, 300]

const setting1 = timeLimitedCache.set(123456789, 987654321, 250)
const setting2 = timeLimitedCache.set(123456788, 987654320, 100)
console.log({setting1})
console.log({setting2})
setTimeout(()=> {
    const getting1 = timeLimitedCache.get(123456788)
    console.log({getting1})
}, 50)
setTimeout(()=> {
    const getting2 = timeLimitedCache.get(123456789)
    console.log({getting2})
}, 150)
setTimeout(()=> {
    const counting = timeLimitedCache.count()
    console.log({counting})
}, 300)

// TODO : RETURN the val with `map` function, dont use for each