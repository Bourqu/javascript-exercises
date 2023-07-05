const removeFromArray = function(list,...values) {
    
    
    for (const v  of values){
        
     const temp=list.filter(function (element){
        return element !==v
     })
     
     list=temp;   
    }

    console.log(list)

    return list
    


};



removeFromArray([1,2,3],2)
removeFromArray([1,2,3],2,3)
// Do not edit below this line
module.exports = removeFromArray;
