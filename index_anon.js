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
