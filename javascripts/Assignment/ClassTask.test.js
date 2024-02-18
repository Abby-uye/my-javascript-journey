const {theFunction} =require('./ClassTask');

test("transposition of a matrix ",()=>{
    let newArray = [[2,3],[4,5]];
    let theAnswer = [[2,4],[3,5]]
    let result = theFunction(newArray);
    expect(result).toEqual(theAnswer)
});


test("transposition of a matrix ",()=>{
    let newArray = [[5,3],[9,8]];
    let theAnswer = [[5,9],[3,8]]
    let result = theFunction(newArray);
    expect(result).toEqual(theAnswer)
});