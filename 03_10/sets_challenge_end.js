//Letters Guessed
//You are playing a game of snowman with a friend and keep track of
//letters that have been guessed using Set().
//Follow the tasks below to test your knowledge.

//1. So far, your friend has gussed the following letters: r, s, t, l, n, e.
//Create a Set using the letters guessed thus far.
const guesses = new Set();
guesses.add("r").add("s").add("t").add("l").add("n").add("e");

//2. Your friend takes another guess: p. Before you add it to the set check
//to see if the Set has 'p'. If not, add it to the Set.
const hasP = guesses.has("p");
console.log("Does the set have the letter P?", hasP);

//if not--add it!
if (!hasP) {
  guesses.add("p");
}

//3. At this point, we will assume your friend hasn't tried to guess the same letter twice.
//The size of the Set will indicate how many guesses he's made. How many guesses
//has your friend made?
const numberOfGuesses = guesses.size;
console.log(`My friend has guessed ${numberOfGuesses} times`);

//4. Delete the letter 'l' from your Set.
guesses.delete("l");
console.log("Guesses after delete", guesses);

//5. What is the second value in your Set?
const guessesValues = guesses.values();
//first value
guessesValues.next();

const secondValue = guessesValues.next().value;
console.log("The second value in my guesses Set is: ", secondValue);

//6. What is the first entry in your Set?
const guessesEntries = guesses.entries();
const firstEntry = guessesEntries.next().value;

console.log("The first entry in my Set is: ", firstEntry);

//7. For each entry in your Set, log out whether the guess was a consonant or a vowel.
//This one is a little challenging!
const vowels = ["a", "e", "i", "o", "u"];

guesses.forEach((value) => {
  const letterType = vowels.includes(value) ? "vowel" : "consonant";
  console.log(`${value} is a ${letterType}`);
});

//8. Clear your Set!
guesses.clear();
console.log("Checking size to make sure", guesses.size);
