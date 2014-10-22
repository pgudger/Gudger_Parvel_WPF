
 /*
Parvel Gudger
WPF 1408 Section 02
Go To Training Week 2
10-22-14
 */

var elephantsWeight = 24000;
/* Weight of an full grown Elephant.*/

 var beeStings = 8.666666667;
 /* How many bee stings it takes to kill per pound.*/

 var totalStings = calcBeeStings(elephantsWeight, beeStings);

 console.log("It would take " + totalStings + " bee stings; to kill an Elephant.");

 function calcBeeStings(elephantsWeight, beeStings){

     return elephantsWeight /beeStings;

 }

