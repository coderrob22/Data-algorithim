//You are given an array with duplicates, can you remove the duplicates and return the array?

const uniqSort = function(arr){
    const breadcrumbs ={};
    const result = [];

    for (let i =0; i< arr.length; i++){   
        if (!breadcrumbs[arr[i]]){
            result.push(arr[i]);
            breadcrumbs[arr[i]]= true;
        }
    }
    return result.sort((a, b)=> a-b);
}

uniqSort([4,2,2,3,2,2,2]) // => [2,3,4]

//this algo speeds up our time complexity but the trade off is it uses more space. Space is O(n). With each element cached, the space gets used linearly.