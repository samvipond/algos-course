function validAnagram(str1, str2){
  // check if two strings are anagrams of one another
  if (str1.length !== str2.length) return false;
  const counter1 = {};
  const counter2 = {};
  for (let k of str1) {
      counter1[k] = (counter1[k] || 0) + 1;
  }
  for (let j of str2) {
      counter2[j] = (counter2[j] || 0) + 1;
  }
  for (let m of str1) {
      if (counter1[m] !== counter2[m]) return false;
  }
  return true;
}

// now in just two loops:

const valid = (str1, str2) => {
  const counter = {}
  for (let k of str1) {
    counter[k] = (counter[k] || 0) + 1;
  }
  for (let j of str2) {
    if (!counter[j]) {
      return false
    }
    counter[j] -= 1;
  }
  return true
}

const test1 = validAnagram('anagram', 'rangama')
const test2 = valid('anagram', 'rangama')

console.log('test1, test2', test1, test2);
