// We need to copy each element from the first array into the second array starting at the index n. We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.


//LOOP
function frankenSplice(arr1, arr2, n) {
let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//SLICE and SPLICE
function frankenSplice(arr1, arr2, n) {
    let bigArr = arr2.slice();
    bigArr.splice(n, 0, ...arr1);
    return bigArr;
  }

//[...SPREAD Operators]
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }