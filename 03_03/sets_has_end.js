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

//Does our Set contain the following flavors:
//Mint Chocolate Chip?
//Coffee?
const hasMintChocChip = iceCream.has('mint chocolate chip');
console.log("Does the Set contain Mint Chocolate Chip? ", hasMintChocChip);

const hasCoffee = iceCream.has('coffee');
console.log("Does the Set contain Coffee? ", hasCoffee);