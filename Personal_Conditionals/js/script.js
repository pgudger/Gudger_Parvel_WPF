
 /*
Parvel Gudger
WPF 1408 Section 02
  Personal Conditionals
10-16-14
 */

 var AskingName = prompt ("What is your name");

 alert("Welcome "+AskingName+"! Age verification needed!");

// Age verification prompt
var yearBorn = prompt("Age verification needed. What year were you born!");
// Console log
 console.log(yearBorn);
// Current year
 var currentYear = 2014;
// Subtracting current year from year born
 var age = currentYear - yearBorn;
//Console log
 console.log(age);
//alert
 alert(AskingName+ " you are " +age+ " years old.");
//if-else
if (age >= 18){

    alert("You may continue!");

}else{

    alert("You are not over over 18!")
 }

//Welcome alert
 alert("Welcome "+AskingName+" to Gudg Hunting Supplies!");
//Array
 var huntingGear = ["Bows", "Arrows", "Tree stands",
     "Rifles", "Rifle ammo", "Camo shirts", "Camo pants", "Camo boots", "Hunting blinds"];
//Console log
 console.log(huntingGear);

 console.log(huntingGear.length);

alert("Please place your order.");

 var Supplies = prompt("Type out what supplies you want, and click okay.");

 console.log(Supplies);

 if (Supplies) {

     alert("Please enter address and supplies will be shipped; in 2 business days.");

     var address = prompt("Address.");

     console.log(address);

 }else {

     alert("No supplies listed in order please try again!");

     prompt("Please place order!");

     if (Supplies) {

         prompt("Please enter address for shipping.");


     }if (address) {


         alert("Thank you " + AskingName + " your parts will be shipped in two days.");

     } else {

         alert("No address please try again!");

         alert("ADDRESS NEEDED FOR SHIPPING!");
     }

     prompt("Enter address for shipping of supplies!");

 }if (address) {

     console.log(address);

     alert("Thank you "+AskingName+" your parts will be shipped in two days.");
 }











