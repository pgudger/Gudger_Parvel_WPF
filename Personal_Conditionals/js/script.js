
 /*
Parvel Gudger
WPF 1408 Section 02
  Personal Conditionals
10-16-14
 */

 var AskingName = prompt ("What is your name");

 console.log(AskingName);

 alert("Welcome "+AskingName+"! Are you over 18!");

// Age verification prompt
var yearBorn = prompt("Age verification needed. What year were you born!");
// Console log
 console.log(yearBorn);
// Current year
 var currentYear = 2014;
 // Console log
 console.log(currentYear);
// Subtracting current year from year born
 var age = currentYear - yearBorn;
//Console log
 console.log(age);
//If Else
if (age >= 18) {

    alert("You may continue!");

}else {

    alert("You are not over over 18!");
    alert("Access denied! You must be 18 years of age, or older to show at Gudg Hunting Supplies");

    for (initialization; condition; increment) {
        // statements
    }


}




//Welcome alert
 alert("Welcome "+AskingName+"! to Gudg Hunting Supplies!");

 document.bgColor = "#8fbc8f";
//Array
 var huntingGear = ["Bows", "Arrows", "Tree stands",
     "Rifles", "Rifle ammo", "Camo shirts", "Camo pants",
     "Camo boots", "Hunting blinds"];
//Console log
 console.log(huntingGear);

 console.log(huntingGear.length);

alert("Please check out our supply list and, place your order.");

 var Supplies = prompt("Type out what supplies you want, and click okay.");

 console.log(Supplies);

 if (Supplies) {

     alert("Please enter address and supplies will be shipped; in 2 business days.");

     var address = prompt("Enter Address.");

     console.log(address);

     alert("Your supplies will ship in 2 days.");



 }else {
    //
     alert("No supplies listed in order please try again!");

     for (initialization; condition; increment) {
         // statements
     }


 }












