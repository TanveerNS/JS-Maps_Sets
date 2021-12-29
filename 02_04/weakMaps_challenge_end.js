const newYork = { city: "New York" };
const nola = { city: "New Orleans" };
const chicago = { city: "Chicago" };
const losAngeles = { city: "Los Angeles" };

//Create a WeakMap using the provided variables as keys.
//Set the value to whatever term you think of when you hear
//those cities. The value can be anything. Hint: use set()
const cities = new WeakMap();
cities.set(newYork, "Big Apple");
cities.set(nola, "Mardi Gras");
cities.set(chicago, "Windy City");
cities.set(losAngeles, "Hollywood");

//Get the value associated with the key: nola.
const nolaValue = cities.get(nola);
console.log("Value of nola key: ", nolaValue);

//Get the value associated with the key: dallas.
const dallas = { city: "Dallas" };
const dallasValue = cities.get(dallas);
console.log("Value of dallas key: ", dallasValue);

//Does this WeakMap have the key: newYork?
const hasNewYork = cities.has(newYork);
console.log("Does the WeakMap contain New York? ", hasNewYork);

//Delete the following key from your WeakMap: chicago
cities.delete(chicago);
