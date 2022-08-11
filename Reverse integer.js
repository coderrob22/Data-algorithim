//first you can reverse the string
function reverseString(str){
    return [...str].reduce((acc, c)=> c + acc, '')
}
//Then sub in the reversed string method into reversed integer:
function reversedInt(num){
    let number= parseInt(reverseString(num.toString()))

//lastly make sure it has the same sign (+/-)
    return (number * Math.sign(num))
}
