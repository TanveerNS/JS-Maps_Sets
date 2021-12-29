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

//Loop through our iceCream Set and if the value does NOT equal 'vanilla',
//log it in the console.
iceCream.forEach((flavor) => {
    if(flavor !== 'vanilla') {
        console.log("Non-vanilla flavor: ", flavor)
    }
});