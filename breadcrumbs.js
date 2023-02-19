//Does the array have unique elements in it?
//This method is called breadcrumbs or 'caching'

isUnique =(arr)=> {
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++){
        if (breadcrumbs[arr[i]]){
            result = false;
        }else{
            breadcrumbs[arr[i]] = true
        }
    }
    return result;
};

console.log(isUnique([1,2,3])=== true);

//This method uses Big O(n) or Order n.
