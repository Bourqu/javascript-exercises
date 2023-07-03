const repeatString = function(input,count) {
    if (count < 0){
        return "ERROR"

    }
    
    var result="";
    for (let index = 0; index < count; index++) {
        
        result+=input;
    }
return result;
};

console.log(repeatString("hey",-1));

// Do not edit below this line
module.exports = repeatString;
