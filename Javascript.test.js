const {sum,multiply,multiplyElementsInAnArray} =require('./SumFile')
test("add a and b",()=>{
    let a =2 ;
     let b = 4
   let result = sum(a, b);
    expect(result).toBe(6)
    })

test("multiply a an b",()=>{
    let a =2
    let b =2
    let result = multiply(a,b)
    expect(result).toBe(4)
})
test("multiply elements in an array",()=>{
    const myArray = [1,2,3,4,5];
    const result =multiplyElementsInAnArray(myArray);
    expect(result).toEqual([2,4,6,8,10]);
})
    