function twoCrystalBall(arr) {
    // Calculate jump length with sqrt of array length
    const jumpLength = Math.floor(Math.sqrt(arr.length));
    let i = 0;
  
    // Leaping through array with distance of jumplength in each leap
    for (; i < arr.length; i = i + jumpLength) {
      if (arr[i] == 1) {
        break;
      }
    }
  
    // Going back by one leap to start walking using linear search
    i = i - jumpLength;
  
    // Walk one by one using linear search
    for (let j = i; j < i + jumpLength; j++) {
      if (arr[j] == 1) {
        return j;
      }
    }
  
    // If reached here means, the ball is not breaking within this height
    return -1;
  }