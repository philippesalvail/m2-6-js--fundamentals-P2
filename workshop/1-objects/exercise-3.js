// Exercise 3
// -------------------

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];
let chuck = "";
staffMembers.forEach(function (item) {
  if (item.name === "Chuck Taylor") {
    chuck =
      item.name +
      "'s javaScript ability level is " +
      item.skillLevels.javascript;
  }
});
console.log(chuck);

function ability(members) {
  let employee = "";
  members.forEach(function (member) {
    if (member.name === "Chuck Taylor") {
      employee =
        member.name +
        "'s javaScript ability level is " +
        member.skillLevels.javascript;
    }
  });
  return employee;
}
console.log(ability(staffMembers));
// We need you to write a script that will print someone's JavaScript ability level.
// Write a line that will print the JavaScript level for employee Chuck Taylor.

// You will need both Array and Object syntax.
