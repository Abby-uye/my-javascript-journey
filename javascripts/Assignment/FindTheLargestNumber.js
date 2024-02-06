let prompt = require("prompt-sync")()
let largest =0
for(let index =0; index <10;index++){
let number = parseInt(prompt("Please enter a number: "))
if(number > largest){
    largest = number
}
}
console.log("Thelargest number of all the input is: "+ largest)