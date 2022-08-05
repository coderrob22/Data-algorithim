// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    if ( bool === true || bool === false){
      return true
    }else {
      return false
    }  
  }
  //test here
  booWho(null);

  
  
  //typeOf method
  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  // test here
  booWho(null);