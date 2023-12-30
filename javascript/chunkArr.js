var chunk = function(arr, size) {
    var chunkInd =0;
    var sliceStart =0
    let sliceEnd;
    let mainChunk =[];
    let isLoop = true;
    while (isLoop) {
        let isCond= true    
        if (isCond) {
            if (sliceEnd>= arr.length) {
                isCond = false
            }
            sliceEnd = (sliceStart + size)> arr.length-1 ? arr.length-1: sliceStart+size
            const chunkArr = arr.slice(sliceStart, sliceEnd)
            mainChunk.push(chunkArr)
            sliceStart = sliceEnd
        } else {
            isLoop = false
        }
    }
    return mainChunk
};
const arr = [1,2,3,4,5]
const size = 1

console.log(chunk(arr, size))

/**
 * var chunk = function(arr, size) {
    var chunkedArray = [];
    var index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
    }
 */