//You are given an array with duplicates, can you remove the duplicates and return the array?

const uniqSort = function(arr){
    const breadcrumbs ={};
    const result = [arr[0]];

    for (let i =1; i< arr.length; i++){   //start loop at 1 because element at 0 index cannot be a duplicate
        if (!breadcrumbs[arr[i]]){
            result.push(arr[i]);
            breadcrumbs[arr[i]]= true;
        }
    }
    return result.sort((a, b)=> a-b);
}

uniqSort([4,2,2,3,2,2,2]) // => [2,3,4]