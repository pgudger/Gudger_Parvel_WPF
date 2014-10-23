
 /*
Parvel Gudger
WPF 1408 Section 02
Go To Training Week 2
10-22-14
 */

 function outptGreeting(){

     console.log("Hello Professor Garlic");
 }

outptGreeting();


 var askingForName = prompt("Please enter name.");

 console.log(askingForName);

 if (askingForName) {

     alert("Hello " + askingForName + "!");
 }else {

     alert("Need a name to continue!");

     askingForName = prompt("please enter name.");

     alert("Hello " + askingForName + "!");


 }


 alert("I've learned a lot from my Web Programming " +
     "Class " + askingForName + ".");

 alert("I am actually doing better in my class then I thought!");

 alert("I can't wait to start my next class, and take everything " +
     " that I've learned and build on it.");

 alert("It may have been a rough road to get here, but " +
     " I am sure that; I've came out a stronger and better " +
     " person because of it.");

