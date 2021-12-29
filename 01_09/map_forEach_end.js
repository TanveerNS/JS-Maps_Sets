//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//Using the forEach method, if a key is equal to 12, 
//console log the value of the key.
saturday.forEach((value, key) => {
    if(key === 12) {
     console.log(`It's time for ${value}`);
    }
})