
let theArray =[1,2,3,4,5,6,7,,9,10,11,12,13,14,15,16,17,18,19,20];
theArray.filter((number)=>{ if(number%2 === 0){
    console.log(number)}})
    console.log(" ")

theArray.forEach((number) => console.log(number*2));
console.log(" ")

theArray.map((number) => console.log(number * number));
exports.