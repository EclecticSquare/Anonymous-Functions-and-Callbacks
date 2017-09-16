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

//CITIES 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var coolTemps = cities.filter(function(element){
   return element.temperature < 70;
} )

console.log(coolTemps);


//CITIES 2

 var cityNames = cities.map(function(element) {
    return element.name;
 });

 console.log(cityNames);


//GOOD JOB!

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var goodJob = people.forEach(function(element) {
  console.log("Good Job, " + element + "!");
});

console.log(goodJob);

//SORT AN ARRAY 1

  console.log(people.sort());
//SORT AN ARRAY 2

var nameLength = people.sort(function(element1, element2 ) {
  return  element1.length- element2.length;
});

console.log(nameLength);

//SORT AN ARRAY 3 INCOMPLETE
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

arr.sort(function(array1, array2){
//we need to tell sort() whether array1 comes before array2 or not
//if array1 comes before array2, return a negative number
//otherwise return a positive number

  var summingFunction = function(accumulator, number) {
    return accumulator + number;
  }

  var array1Sum = array1.reduce( summingFunction, 0);  //this value that we return will be passed into accumulator
  var array2Sum = array2.reduce( summingFunction, 0);  //this value that we return will be passed into accumulator

  if(array1Sum < array2Sum) {
    return -1;
  } else {
    return 1;
  }
});
console.log(arr);


//3 TIMES INCOMPLETE
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
//
// console.log(call3Times("fun"));


//
