let theFunction = function(theArray){
    let temp =0
        temp = theArray[0][1];
        theArray[0][1] = theArray[1][0]
        theArray[1][0] = temp;
    
return theArray
}
let newArray = [[2,3],[4,5]];
let theArray = theFunction(newArray);
console.log(theArray)
module.exports={theFunction}