/**** EXPLICITLY CONVERTING DATA TO BOOLEANS ****/

/** EXAMPLE 1 - FALSY VALUES */

let humanVisitorsToMars = 0;
let screamInSpace = "";
let alienLifeDetected = null;
let darkMatter = undefined;
let imaginaryNumber = NaN;

// DEMO: Convert each value above to Boolean and log its new value.
console.log(Boolean(humanVisitorsToMars));
console.log(Boolean(screamInSpace));
console.log(Boolean(alienLifeDetected));
console.log(Boolean(darkMatter));
console.log(Boolean(imaginaryNumber));

/** EXAMPLE 2 - TRUTHY VALUES */

let humanVisitorsToMoon = 28;
let firstHumanToWalkOnMoon = "Neil Armstrong";
let buzzLightyearDestination = Infinity;

// DEMO: Convert each value above to Boolean and log its new value.
console.log(Boolean(humanVisitorsToMoon));
console.log(Boolean(firstHumanToWalkOnMoon));
console.log(Boolean(buzzLightyearDestination));

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
