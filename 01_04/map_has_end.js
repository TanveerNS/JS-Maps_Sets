//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//Does our Map have a value associated with 4?
const hasFour = saturday.has(4);
console.log("Does my Map have anything associated with 4?", hasFour);
//Does our Map have a value associated with 8?
const hasEight = saturday.has(8);
console.log("Does my Map have anything associated with 8?", hasEight);