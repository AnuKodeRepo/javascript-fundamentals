/**** DATA TYPE CONVERSION: PRACTICE ****/

/*
    Get some practice with both explicit and implicit conversion.
*/

/** EXPLICIT CONVERSION **/

// STRINGS

// 1. TODO: Convert these values to numbers using String() and .toString() (try one of each)
// Store the converted values in new variables; print each variable and its type.

let engineTemp = 240;
let isShieldActive = true;

let newEngineTemp = String(engineTemp);
console.log(newEngineTemp);
console.log(typeof newEngineTemp);

let newIsShieldActive = isShieldActive.toString();
console.log(newIsShieldActive);
console.log(typeof newIsShieldActive);

// NUMBERS

// 2. TODO: Convert these values to numbers using the appropriate conversion function/method.
// Store the converted values in new variables; print each variable and its type.
let inputSpeed = "28000";
let inputThrust = "9.81ms";
let inputRotation = "15.5 degrees";

let newInputSpeed = parseInt(inputSpeed);
console.log(newInputSpeed);
console.log(typeof newInputSpeed);

let newInputTrust = parseFloat(inputThrust);
console.log(newInputTrust);
console.log(typeof newInputTrust);

let newInputRotation = parseFloat(inputRotation);
console.log(newInputRotation);
console.log(typeof newInputRotation);

// BOOLEANS

// 3. TODO: Convert these values to booleans and store the values in new variables,
// grouping them by "truthy" and "falsy". Print each variable and its type.
let shipName = "Columbia";
let cargoWeight = 0;
let missionStatus = "";
let crewCount = 5;
let repairPlan = null;

let isShipNameTruthy = Boolean(shipName);
console.log(isShipNameTruthy);
console.log(typeof isShipNameTruthy);

let isCargoWeightTruthy = Boolean(cargoWeight);
console.log(isCargoWeightTruthy);
console.log(typeof isCargoWeightTruthy);

let isMissionStatusTruthy = Boolean(missionStatus);
console.log(isMissionStatusTruthy);
console.log(typeof isMissionStatusTruthy);

let isCrewCountTruthy = Boolean(crewCount);
console.log(isCrewCountTruthy);
console.log(typeof isCargoWeightTruthy);

let isRepairPlanTruthy = Boolean(repairPlan);
console.log(isRepairPlanTruthy);
console.log(typeof isRepairPlanTruthy);

/** IMPLICIT CONVERSION (TYPE COERCION) **/

let numberOfAstronauts = 5;
let mealsPerAstronaut = 12;
let beveragesPerAstronaut = 24;
let shuttleName = "Discovery";

// 4. TODO: Use what you know about implicit conversion to print the following sentences.
// Use the variables above, and write only one line of code per sentence.

// Print "A total of 60 meals have been loaded onto the shuttle Discovery."

// Print "A total of 36 meals and beverages will be needed for each astronaut."

let totalMeals = numberOfAstronauts * mealsPerAstronaut;
console.log(`A total of ${totalMeals} meals have been loaded onto the shuttle Discovery`);

let totalBeverageMeals = mealsPerAstronaut + beveragesPerAstronaut;
console.log(`A total of ${totalBeverageMeals} meals and beverages will be needed for each astronaut`);

// TODO: Before you go... don't forget to make a git commit!
