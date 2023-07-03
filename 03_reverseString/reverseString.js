const reverseString = function(input) {
    let reverse =""
    for (let index = input.length-1; index > -1; index--){
        reverse+= input[index]
        
    }
    return reverse;

};

reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
