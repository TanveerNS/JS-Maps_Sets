//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

const iceCream = new Set();
iceCream.add('chocolate')
.add('vanilla')
.add('coffee')
.add('coffee')
.add('strawberry')
.add('vanilla');

//What is the second value in our iceCream Set?
const iceCreamValues = iceCream.values();
iceCreamValues.next();

const secondValue = iceCreamValues.next().value;
console.log("The second value in my Set is: ", secondValue);