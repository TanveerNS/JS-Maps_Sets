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

//Delete vanilla from the iceCream Set.
iceCream.delete('vanilla');
console.log("iceCream Set after removing vanilla", iceCream);

//Clear the iceCream Set.
iceCream.clear();
console.log("Checking Set size after clearing ", iceCream.size)