let prompt = require("prompt-sync")();
let name = prompt("What is your name ")


let millage = function(){
let totalMileGathered = 0;
let totalGallonsGathered =0;
let contineu = "";
while(contineu!="no"){
let milesDriven = prompt("How many miles did you drive for ");
let gallonsUsed = prompt("How many gallons did you use ");
let milesPerGallonObtained = milesDriven / gallonsUsed
console.log("Milles obtaiened for this trip is " +milesPerGallonObtained)
totalGallonsGathered+=parseInt(gallonsUsed);
console.log(totalGallonsGathered);
totalMileGathered+=parseInt(milesDriven);
contineu = prompt("Do you still have miles driven  ");
}
let milesPerGallonObtainedForAllTrips = totalMileGathered / totalGallonsGathered;
console.log("Total miles per gallon for all trips = "+milesPerGallonObtainedForAllTrips);
}

millage();