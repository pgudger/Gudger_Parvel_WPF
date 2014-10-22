
 /*
Parvel Gudger
WPF 1408 Section 02
Functions Worksheet
10-22-14
 */


 var diameter = 28;
 /* The diameter is shown as d = 2 r.
 Which means that the radius is half of
 the diameter.
  */
 var pi = 3.14;
 /* To get the circumference of a circle you need to
 times the diameter by pi. Which the number pi is 3.141592653......
 Pi it self keeps going, so it's easier to just round it down to
 3.14.
  */
 var circumference = calcCircumference(diameter, pi);

 console.log("The Circumference of the Circle is " + circumference +"cm");

 function calcCircumference(diameter, pi){

     return diameter *pi;
 }


