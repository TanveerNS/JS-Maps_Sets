//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//What is the third set of entries in your saturday Map object?
const saturdayEntries = saturday.entries();
saturdayEntries.next();
saturdayEntries.next();
const thirdEntry = saturdayEntries.next().value;
console.log("The third entry in my saturday Map object is: ", thirdEntry)