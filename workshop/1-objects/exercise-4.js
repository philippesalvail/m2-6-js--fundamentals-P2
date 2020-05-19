// Exercise 4
// -------------------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

Object.keys(foodPairings).forEach((element) => {
  console.log(
    "#" + (Object.keys(foodPairings).indexOf(element) + 1) + ": " + element
  );
});

for (let property in foodPairings) {
  console.log(
    "With " + property + ", it is best to have " + foodPairings[property]
  );
}

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.

// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."
