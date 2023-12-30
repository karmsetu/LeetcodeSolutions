Array.prototype.groupBy = function(fn) {
    let groups = new Set(this.map(elem => fn(elem)));
    const resolvedGroup = {}
    groups.forEach(res=> {
        resolvedGroup[String(res)] = this.reduce(item=> item.has(res))
        }
    )
    return resolvedGroup
};
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
    console.log(item)
  return item.id; 
}

console.log(array.groupBy(fn))