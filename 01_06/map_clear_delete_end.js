//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//Delete the element associated with the key 3.
console.log("Did the key 3 get deleted?", saturday.delete(3));
//Delete the element associated with the key 10.
console.log("Did the key 10 get deleted?", saturday.delete(10));
//Clear the entire saturday Map object.
saturday.clear();
console.log("Confirm saturday is empty", saturday.size)