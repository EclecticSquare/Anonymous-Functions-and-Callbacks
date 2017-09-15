var array = [3, 2, 6, 78, -9, 22, -3];

//POSITIVE NUMBERS
 var newArray = array.filter(function(element){
  return element >= 0;
});
 console.log(newArray);


//EVEN NUMBERS
 var evenNum = array.filter(function(element) {
   return (element % 2) == 0;
 });
 console.log(evenNum);

//SQUARE NUMBERS
var squared = array.map(function(element) {
  return element * element;
});

console.log(squared);


//  var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//    return x * 2;
// array.forEach(function(element) {
// console.log(element + "!");
// })
