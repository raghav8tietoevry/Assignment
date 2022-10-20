//1.push() : 1.method adds new items to the end of an array.
//           2.method changes the length of the array.
//           3.method returns the new length.
console.log("push method \n--------------------------------");
let numbers = [1, 2, 3];
console.log("I/P:", numbers);
numbers.push(5, 6, 7);
console.log("O/P:", numbers);

//2.pop() : 1.method removes the last element of an array.
//           2.method changes the original array.
//           3.method returns the removed element.
console.log("\npop method \n--------------------------------");
numbers = [1, 2, 3];
console.log("I/P:", numbers);
const lastElement = numbers.pop();
console.log("O/P(numbers):", numbers);
console.log("O/P(lastElement):", lastElement);

//3.shift() : 1.method removes the first item of an array.
//           2.method changes the original array..
//           3.method returns the shifted element.
console.log("\nshift method \n--------------------------------");
numbers = [1, 2, 3];
console.log("I/P:", numbers);
const firstElement = numbers.shift();
console.log("O/P(numbers):", numbers);
console.log("O/P(lastElement):", firstElement);

//3.unShift() : 1.method adds new elements to the beginning of an array..
//           2.method overwrites the original array.
console.log("\n unshift  method \n--------------------------------");
numbers = [1, 2, 3];
console.log("I/P:", numbers);
numbers.unshift(-1, 0);
console.log("O/P(numbers):", numbers);

//slice() : 1.method returns selected elements in an array, as a new array
//          2.method selects from a given start, up to a (not inclusive) given end
console.log("\n slice  method \n--------------------------------");
numbers = [1, 2, 3, 4, 5];
console.log("I/P:", numbers);
const numbers2 = numbers.slice(2, 4);
console.log("O/P(numbers):", numbers);
console.log("O/P(numbers2):", numbers2);

//concat() : 1.method concatenates (joins) two or more arrays.
//          2.method returns a new array, containing the joined arrays.
//          3.method does not change the existing arrays.
console.log("\n concat  method \n--------------------------------");
numbers = [1, 2, 3, 4, 5];
const followNumbers1 = [6, 7, 8];
const followNumbers2 = [9, 10, 11];
const joinedArray = numbers.concat(followNumbers1, followNumbers2);
console.log("I/P:", numbers);
console.log("O/P(joinedArray):", joinedArray);

//indexof () : 1.method returns the first index (position) of a specified value.
//          2. method returns -1 if the value is not found.
console.log("\n indexof  method \n--------------------------------");
let names = ["penny", "howard", "raj"];
let i = names.indexOf("howard");
if (i > -1) {
  names[i] = "leanord";
}
console.log("O/P:", names);

//lastindexof () : 1. method returns the last index (position) of a specified value
//          2. method returns -1 if the value is not found.
console.log("\n lastindexof  method \n--------------------------------");
names = ["penny", "howard", "raj", "howard"];
i = names.indexOf("howard");
if (i > -1) {
  names[i] = "leanord";
}
console.log("O/P:", names);

//includes() : 1.method returns true if an array contains a specified value.
//          2. method returns false if the value is not found.
console.log("\n includes  method \n--------------------------------");
const fruites = ["mango", "orange", "babana"];
if (fruites.includes("mango")) {
  console.log("O/P:mango exists");
} else {
  console.log("O/P:mango doe not exists");
}

//find() : 1.method returns the value of the first element that passes a test.
//         2.method executes a function for each array element.
console.log("\n find  method \n--------------------------------");
let persons = [
  { name: "penny", age: 20 },
  { name: "raj", age: 21 },
  { name: "howard", age: 22 },
];

const rajAge = persons.find(findRaj).age;
function findRaj(item) {
  return item.name === "raj";
}

console.log(rajAge);

//filter() : 1.method creates a new array filled with elements that pass a test provided by a function.
//         2.method executes a function for each array element.
console.log("\n filter  method \n--------------------------------");
persons = [
  { name: "penny", age: 10 },
  { name: "raj", age: 21 },
  { name: "howard", age: 22 },
];

const adults = persons.filter(findAdults);
function findAdults(item) {
  return item.age > 18;
}

console.log(adults);

//findindex () : 1.method returns the index (position) of the first element that passes a test.
console.log("\n findindex  method \n--------------------------------");
persons = [
  { name: "penny", age: 10 },
  { name: "raj", age: 21 },
  { name: "howard", age: 22 },
];

const person = persons.findIndex(indexOfRaj);
function indexOfRaj(item) {
  return item.name === "raj";
}

console.log(person);

//foreach() : 1.method calls a function for each element in an array.
console.log("\n foreach  method \n--------------------------------");
numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

//map() : 1.creates a new array from calling a function for every array element.
//        2. calls a function once for each element in an array.
console.log("\n map  method \n--------------------------------");
let products = [
  { name: "laptop", price: "7000", qty: 2 },
  { name: "phone", price: "1000", qty: 3 },
  { name: "desktop", price: "500", qty: 4 },
];

const totalProductValue = products.map((product) => ({
  name: product.name,
  totalPrice: product.price * product.qty,
}));
console.log(totalProductValue);

//sort() :By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// we can fix this by providing a compare function:
console.log("\n sort  method \n--------------------------------");
products = [
  { name: "laptop", price: "7000", qty: 2 },
  { name: "phone", price: "1000", qty: 3 },
  { name: "desktop", price: "500", qty: 4 },
];

products.sort(compareProducts);

function compareProducts(first, next) {
  return first.price - next.price;
}
console.log("O/P:", products);

//reverse() : 1.method reverses the order of the elements in an array.
//        2. method overwrites the original array..
console.log("\n reverse  method \n--------------------------------");
const originalString = "I love India";
console.log("I/P:", originalString);
const reversedString = originalString.split("").reverse().join("");
console.log("O/P:", reversedString);

//split() : 1.method splits a string into an array of substrings.
console.log("\n split  method \n--------------------------------");
let text = "How are you doing today?";
console.log("I/P:", text);
const splitedArray = text.split(" ");
console.log("O/P (First element):", splitedArray[0]);

//reduce() : 1.method returns a single value: the function's accumulated result.
console.log("\n reduce  method \n--------------------------------");
const stores = [
  { product: "laptop", value: 1000 },
  { product: "desktop", value: 1000 },
];
console.log("I/P:", stores);
const totalValueOfTheStore = stores.reduce(
  (acc, store) => acc + store.value,
  0   
);

console.log("O/P (Total Value of the store):", totalValueOfTheStore);
