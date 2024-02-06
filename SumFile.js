let sum = function(a,b){
    let answer = a+b
    return answer
    }

    let multiply = function(a,b){
        let answer = a*b;
        return answer

    }
    let multiplyElementsInAnArray = function(arr){
        let newArray = []
    for(let  element of arr){
        let ans = element*2
        newArray.push(ans)
    }
    return newArray
    }
    module.exports = {sum,multiply,multiplyElementsInAnArray}