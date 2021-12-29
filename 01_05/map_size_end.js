//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//What is the size of our saturday Map?
const saturdaySize = saturday.size;
console.log(`My Map has ${saturdaySize} items.`);