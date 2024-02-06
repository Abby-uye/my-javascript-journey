let prompt = require("prompt-sync")()
let salaryCalculator = function(){
let weeklySalary = 200;
let totalSales =0;
let allSales = []
let moreItems = prompt("Did you make sales For the week, if no Please enter no: ");
if(moreItems == "no"){

return console.log("Your total salary for the week is "+ weeklySalary);
}
while(moreItems != "no"){
    let itemPrice = parseFloat(prompt("Whats the the price for this item: "))
    allSales.push(itemPrice)
    totalSales+=itemPrice;
    moreItems = prompt("Did you sell more items If yes enter yes else enter no : ")
}
printAllItems(allSales)
    totalSalesCommision = (9 / totalSales) * 100
    console.log(totalSales)
    let salary = parseFloat(totalSalesCommision + weeklySalary)
    return console.log("Your salary for this week is " + salary);

}

let printAllItems = function(array){
   let itemCount = 1;
    array.forEach(element => {
        console.log("Item " + itemCount + "       "+ element)
        itemCount++
    });
}
salaryCalculator()

