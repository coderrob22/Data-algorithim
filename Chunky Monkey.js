// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


//Loop
let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;


  //Another method
function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }


  //Or while loop
function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }


  //Another while loop
  function chunkArrayInGroups(arr, size) {
    const newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
