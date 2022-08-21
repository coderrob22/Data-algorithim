Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//Ends With Method
function confirmEnding(str, target) {
    return str.endsWith(target);
  }

or 

//Slice Method
function confirmEnding(str, target){
    return str.slice(str.length - target.length) === target;
}

or

//Negative Slice Method
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }

or

//Regex Method
function confirmEnding(str, target) {
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
  }