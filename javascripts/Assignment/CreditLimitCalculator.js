let prompt = require("prompt-sync")()

let accountNumber = prompt("Enter your account number ");
let balanceAtTheBeginningOfTheMonth = prompt("Enter your account balance at the begining of the month ");
let totalChargedThisMonth = prompt("Enter the total  amount charged this month");
let totalOfAllCreditsAppliedThisMonth =prompt("Enter the total of all credits applied this month ")
let allowedCreditLimit = prompt("Enter allowed credit limit")
let newBalance = balanceAtTheBeginningOfTheMonth + totalChargedThisMonth - totalOfAllCreditsAppliedThisMonth;
if(newBalance > allowedCreditLimit){
    console.log("Credit limit exceeded")
}
