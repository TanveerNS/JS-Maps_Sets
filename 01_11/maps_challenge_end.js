//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2013 - "Argo"
// 2014 - "12 Years a Slave"
// 2015 - "Birdman"
// 2016 - "Spotlight"
// 2017 - "Moonlight"
// 2018 - "The Shape of Water"
// 2019 - "Green Book"
// 2020 - "Parasite"

//1. Create a new Map object with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const movies = new Map();
movies.set(2013, "Argo");
movies.set(2014, "12 Years a Slave");
movies.set(2015, "Birdman");
movies.set(2016, "Spotlight");
movies.set(2017, "Moonlight");
movies.set(2018, "The Shape of Water");
movies.set(2019, "Green Book");
movies.set(2020, "Parasite");

//2. What film won best picture in 2015?
const bestMovie2015 = movies.get(2015);
console.log("Best Movie 2015", bestMovie2015);

//3. Does this list contain Best Picture from 2010? 2018?
const has2010 = movies.has(2010);
console.log("Does this list include Best Picture from 2010?", has2010)

const has2018 = movies.has(2018);
console.log("Does this list include Best Picture from 2018?", has2018)

//4. How many films are included in this list?
const moviesSize = movies.size;
console.log(`My movie Map has ${moviesSize} entries.`);

//5. What is the second key in this movies Map object?
const movieKeys = movies.keys();
movieKeys.next();
const secondKey = movieKeys.next().value;
console.log("The second key in the movies Map is: ", secondKey);

//6. What is the third value in this movies Map object?
const movieValues = movies.values();
movieValues.next();
movieValues.next();
const thirdValue = movieValues.next().value;
console.log("The third value in the movies Map is: ", thirdValue);

//7. What is the first set of entries in this movies Map object?
const movieEntries = movies.entries();
const firstEntries = movieEntries.next().value;
console.log("First entries in my movies Map are: ", firstEntries);

//8. Loop over the map, and if the movie won Best Picture before 2017, 
//log it in the console. Include the year and the movie. 
movies.forEach((value, key) => {
    if(key < 2017 ) {
        console.log(`Best Picture winner in ${key}: ${value}`)
    }
});

//9. Delete the Best Picture from 2013 from your movies Map object.
movies.delete(2013);
console.log("Movies map after delete", movies)

//10. Clear your movies Map object. 
movies.clear();
console.log("Movies Size", movies.size)
