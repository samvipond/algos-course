function countUniqueValues(arr){
  let result = 0
  let x = 0
  for (let i = 1; i < arr.length; i++) {
    let first = arr[x]
    let second = arr[i]
    if (first !== second) {
      x += 1
      arr[x] = arr[i]
    }
    result = x + 1
  }
  return result
}

const test1 = countUniqueValues([1,1,1,1,1,2])
const test2 = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
const test3 = countUniqueValues([])
const test4 = countUniqueValues([-2,-1,-1,0,1])
console.log('test1', test1)
console.log('test2', test2)
console.log('test3', test3)
console.log('test4', test4)
