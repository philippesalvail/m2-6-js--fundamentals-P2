// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
let myObject = {
  name: {
    first: "Philippe",
    last: "Salvail",
  },
  age: "38",
  city: "Montreal",
  siblings: 1,
  petName: "Devil",
  monthOfBirth: "July",
};

console.log("my object: ", myObject);
console.log("first name: ", myObject.name.first);
console.log("age: ", myObject.age);
console.log("---------");

// A) console.log() your object.
// B) console.log() a few of the values in the object.

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

myObject.favoriteTvShows = ["The Punisher", "DareDevil"];
myObject.occupation = "Helpdesk Agent";
myObject.dob = "July 5th 1981";
myObject.parents = { Father: "Steve", Mother: "Claire" };

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  Title: "The Punisher",
  Director: "Jeremy Webb",
  "Year released": "2016",
  Rating: "7.6",
  Actors: ["Jon Berthal", "Ebon Moss-Bachrach", "Ben Barnes"],
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};

person.age; // => 26
person[key]; // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};

function fullName(person) {
  let nameOfPerson = "";
  // Your code here
  for (x in person.name) {
    nameOfPerson += person.name[x] + " ";
  }
  return nameOfPerson;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: "Rick",
    last: "Sanchez",
  },
  age: 66,
};

function betterFullName(person) {
  let nameOfPerson = "";
  for (x in person.name) {
    nameOfPerson += person.name[x] + " ";
  }
  return nameOfPerson;
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
