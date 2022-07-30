//Remove all falsy output from Array.

//Loop Method
function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
  }

//Filter method
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  