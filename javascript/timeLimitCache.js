var TimeLimitedCache = function() {
    this.memory = []
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let setMemory = this.memory
    let resultToBeReturned = false;
    const currTime = new Date().getTime()
    const hasKey = this.memory.map(item=> {return Object.keys(item.pair)[0] === String(key)}).includes(true)
    if(setMemory.length ===0 || !hasKey){
        this.memory.push({
            duration,
            entryTime: new Date().getTime(),
            pair: {[key]: value}
        })
    } else {
        setMemory.forEach(entry=> {
            if (Object.keys(entry.pair)[0]=== String(key)) {
                if ((currTime-entry.entryTime)<= duration) {
                    resultToBeReturned = true
                }
                entry.entryTime = new Date().getTime()
                entry.pair[key] = value
                entry.duration = duration 
            }
        })
        this.memory = setMemory
    }
    console.log(this.memory)
    return resultToBeReturned
};
TimeLimitedCache.prototype.get = function(key) {
    let resultToBeReturned = -1
    const currTime = new Date().getTime()
    for (let index = 0; index < this.memory.length; index++) {
        const getMemory = this.memory[index]
        const keyName = Object.keys(getMemory.pair)[0]
        if (keyName === String(key)) {
            if ((currTime- getMemory.entryTime)<= getMemory.duration) {
                resultToBeReturned = getMemory.pair[keyName]
                break
            }
        }
    }
    return resultToBeReturned
};

TimeLimitedCache.prototype.count = function() {
    const currTime = new Date().getTime()
    var count = 0;
    this.memory.forEach(entry=> {
        if ((currTime-entry.entryTime)<= entry.duration) {
            count++
        }
    })
    return count
};


const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(100, 200, 400)
timeLimitedCache.set(200, 300, 300)
timeLimitedCache.set(200, 500, 500)
timeLimitedCache.set(300, 400, 300)
setTimeout(()=> {
    const get= timeLimitedCache.get(100)
    console.log({get})
}, 100)
setTimeout(()=> {
    const get= timeLimitedCache.get(200)
    console.log({get})
}, 100)
setTimeout(()=> {
    const get= timeLimitedCache.get(300)
    console.log({get})
}, 100)
setTimeout(()=> {
    const count= timeLimitedCache.count()
    console.log({count})
}, 200)
setTimeout(()=> {
    const count= timeLimitedCache.count()
    console.log({count})
}, 400)


// TODO : RETURN the val with `map` function, dont use for each