/**** IMPLICIT CONVERSION (TYPE COERCION) ****/

/** EXAMPLE 1 - CONCATENATION **/

let sectorText = "Sector";
let sectorNumber = 7;

// DEMO: Concatenate the two variables above and store in a
// new variable; print it and its type to the console.
 let sectorTextAndNumber = sectorText + sectorNumber;
 console.log(sectorTextAndNumber);
 console.log(typeof sectorText);
 console.log(sectorNumber);
  
/** EXAMPLE 2 - ARITHMETIC **/

let totalDistanceKm = "1000";
let distanceTraveledKm = 400;
let oxygenLevel = "60";

// DEMO: Calculate the remaining distance and store in a
// new variable; print it and its type to the console.

let remainingDistance = Number(totalDistanceKm) - distanceTraveledKm;
console.log(remainingDistance);
console.log(typeof remainingDistance);

// DEMO: Double the oxygen level and store in a
// new variable; print it and its type to the console.
let newOxygenLevel = Number(oxygenLevel)*2;
console.log(newOxygenLevel);
console.log(typeof newOxygenLevel);

/** EXAMPLE 3 - ANTICIPATING ERRORS WITH TYPE COERCION **/

let totalCargoMass = "12000 kg";
let numberOfCargoHolds = 3;

// DEMO: Calculate the average mass per hold and store in a
// new variable; print it to the console to see the result.
let averageMass = (parseInt(totalCargoMass))/numberOfCargoHolds;
console.log(averageMass);
console.log(typeof averageMass);

// DEMO: Use explicit conversion as needed to complete the mathematical
// calculation, then use implicit conversion to add ' kg' to the result.
// Print the final result and its type to the console.

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
