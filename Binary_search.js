function binarySearch (arr, n){
    let low = 0;
    let high= arr.length;

    do{
        const midpoint = Math.floor(low + (high-low) / 2);
        const value = arr[midpoint];

        if (value === n){
            return true;
        }else if (value > n){
            high = midpoint;
        }else{
            low = midpoint + 1;
        }
    }while (low < high);
    return false;
}