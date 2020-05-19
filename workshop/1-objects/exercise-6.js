/**
 * One of the most common tasks as a software developer is to "transform" data
 * from one form to another.
 *
 * In this exercise, you're asked to transform data from the given shape to
 * a new shape.
 */

let inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

function transformData(data) {
  let transformData = {};
  let individualAddress = {};
  let individualSuperPowers = [];
  let mother = {};
  let bestFriend = {};
  let girlFriend = {};
  let motherSuperPowers = [];
  let bestFriendSuperPowers = [];
  let girlFriendSuperPowers = [];
  let relationships = [];

  transformData.name = data["name"];
  transformData.age = data["age"];
  transformData.status = data["status"];

  individualAddress.streetAddress = data["address1"];
  individualAddress.city = data["addressCity"];
  individualAddress.state = data["addressState"];
  individualAddress.country = data["addressCountry"];

  transformData.address = individualAddress;

  individualSuperPowers.push(data["superpower1"]);
  transformData.superpowers = individualSuperPowers;

  mother.type = "mother";
  mother.name = data["motherName"];
  mother.age = data["motherAge"];
  mother.status = data["motherStatus"];
  mother.superpowers = motherSuperPowers;

  bestFriend.type = "bestfriend";
  bestFriend.name = data["bestFriendName"];
  bestFriend.age = data["bestFriendAge"];
  bestFriend.status = data["bestFriendStatus"];
  bestFriend.superpowers = bestFriendSuperPowers;

  girlFriend.type = "girlfriend";
  girlFriend.name = data["girlfriendName"];
  girlFriend.age = data["girlfriendAge"];
  girlFriend.status = data["girlfriendStatus"];
  girlFriendSuperPowers.push(data["girlfriendSuperpower1"]);
  girlFriendSuperPowers.push(data["girlfriendSuperpower2"]);
  girlFriend.superpowers = girlFriendSuperPowers;

  relationships.push(mother);
  relationships.push(bestFriend);
  relationships.push(girlFriend);

  transformData.relationships = relationships;
  return transformData;
}

/*

We want a function that can transform it from that shape to this shape:

{
  "name": "Will Byers",
  "age": 9,
  "status": "upside down",
  "address": {
    "streetAddress": "123 Whatever street",
    "city": "Hawkins",
    "state": "Indiana",
    "country": "United States"
  },
  "superpowers": [
    "can-blink-lights"
  ],
  "relationships": [
    {
      "type": "mother",
      "name": "Joyce Byers",
      "age": 35,
      "status": "worried",
      "superpowers": []
    },
    {
      "type": "girlfriend",
      "name": "Eleven",
      "age": 9,
      "status": "angry",
      "superpowers": [
        "telepathy",
        "multiverse portal sealing"
      ]
    }
  ]
}

Specifically:

- Address becomes nested in an object
- Instead of `superpower1` and `superpower2`, an array is used
- Instead of having a "flat" structure for relationships, a new `relationships`
  array is added, which holds objects for each relationship.
- Each relationship has a `type`, like mother/best-friend/girlfriend
- Each relationship also has an array of super powers, same logic as the main
  `superpowers` array

NOTE: For superpowers, you should only have as many items as are available.
For example, the main superpowers array should be:
✅ ['can-blink-lights']
⛔️ ['can-blink-lights', null]
*/

/*
  `JSON.stringify` is used to "pretty-print" the output, so that it's easy
  to see what it looks like, and debug any problems.
*/
console.log(JSON.stringify(transformData(inputData), null, 2));
