				###	Object Creation in JavaScript
---bind and this part 1
let dog = {
	sound:'woof',
	talk: function(){
		console.log(this.sound)
	}
}
dog.talk()	// "woof"
-----
let talkFunction = dog.talk
talkFunction()		// undefined
-----
let boundFunction = talkFunction.bind(dog)
boundFunction()		// "woof"

let button = document.getElementById('myButton');
button.addEventListener('click', dog.talk.bind(dog) );

---bind and this part 2

function talk(sound) {
	console.log(sound)
}
talk('wooooof!')

function talk() {
	console.log(this)
}
talk()

function talk() {
	console.log(this.sound)
}
let boromir = {
	sound: 'One does not simply walk into mordor'	
}
let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir() // One does not simply walk into mordor
talk() // undefined