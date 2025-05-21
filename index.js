// array

// empty aray
const myList = [];
console.log(myList);

// aray with numbers
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);

const stringarray = ["orange", "banana", "mango", "apple"];

console.log(stringarray);
console.log(stringarray[1]);

const fruits = ["apple", "mango", "pineapple", "orange"];

console.log(fruits);
fruits.push("carrot");
fruits.pop("carrot");
fruits.shift();
fruits.unshift("noor");

let people = ["noor", "ibrahim", "ahmed"];
console.log(people.join("/"));
console.log(people.reverse());
console.log(people.slice(0, 2));
console.log(people.sort());

let person = {
  firstNmae: "Noor",
  lastNname: "Bare",
  age: 25,
  location: ["somali", "kenya"],
  isProgrammer: true,
};

console.log(person);
console.log(person.location[0]);
console.log(person["isProgrammer"]);

console.log(person.firstNmae);

console.log((person.firstNmae = "ahmed"));
console.log((person.location = "kikuyu"));