const fruits = ["apple", "banana", "orange"];
const indexNumber = fruits.indexOf("banana");
console.log(indexNumber);
fruits[indexNumber] = "mango";
console.log(fruits);
fruits.pop("orange");
console.log(fruits);
fruits.push("waterMelon");
console.log(fruits);
