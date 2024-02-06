let prompt = require("prompt-sync")()
let allCitezensEarnings =[]
let allCitizensNames = []
let count =0;
let taxForThisCitizen =0
while(count < 3){
let thisCitizenName = prompt("What is your name please: ")
allCitizensNames.push(thisCitizenName)
let thisCitizenEarning = prompt("How much do you earn: ")
allCitezensEarnings.push(thisCitizenEarning)
count++
}
console.log("Name             Earning         Tax")
console.log("=====================================")
for(let index = 0;index < allCitezensEarnings.length; index++){
    if(allCitezensEarnings[index] <= 30_000){
        taxForThisCitizen = (15/allCitezensEarnings[index])* 100;
        console.log(allCitizensNames[index] +"               "+ allCitezensEarnings[index] +"             "+ taxForThisCitizen)
    }
   else if(allCitezensEarnings[index] > 30_000){
        taxForThisCitizen = (20/allCitezensEarnings[index])* 100;
        console.log(allCitizensNames[index] +"               "+ allCitezensEarnings[index] +"             "+ taxForThisCitizen)
    }
    }
    