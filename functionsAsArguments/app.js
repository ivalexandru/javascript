let years = [1990, 1965, 1937, 2005, 1998];

//arr si fn de mai jos sunt nume generice, in locul lor vei baga numele arrayului respectiv numele functiei, fara() dupa functie (vezi mai jos)
//arrayCalc e o functie generica ce loopeaza peste un array asupra caruia aplica functia "fn"
function arrayCalc(arr, fn) {
   let arrRes = [];
   for (let i=0; i<arr.length; i++){
      arrRes.push(fn(arr[i]));
   }
   return arrRes;
}

//CALLBACK functions =  functii care fac un task simplu; si sunt bagate in alte functii ca argumente
function calculateAge (el) {
   return 2016 - el;
}

function isFullAge (el) {
   return el >= 18;
}

function maxHeartrate(el) {
   if (el >= 18 && el <= 81) {
      return Math.round(206.9 - ( 0.67 * el ));
   } else 
      return -1;
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartrate);
console.log(`Ages are:  ${ages}`);
console.log(`is it true that you are older than 18?  ${fullAges}`);
console.log(`Your maxHeartRate is  ${rates}`);
