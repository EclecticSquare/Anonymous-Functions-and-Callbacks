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

 var cityNames = cities.filter(function(element) {
    return element.name;
 });

 console.log(cityNames);
