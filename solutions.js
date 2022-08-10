const euroCountries = ["Germany", "France", "Poland"];
const asianCountries = ["Pakistan", "India", "China"];

euroCountries.push(...asianCountries);
console.log(euroCountries);

const euroCountries2 = ["Germany", "France", "Poland"];
const asianCountries2 = ["Pakistan", "India", "China"];

const merge = [...euroCountries2, ...asianCountries2];
console.log(merge);

const euroCountries3 = ["Germany", "France", "Poland"];

const newArray = [...euroCountries3];

console.log(`-----------------------------------------------`);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

console.log(`-----------------------------------------------`);
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const maxArr = Math.max(...arr3, ...arr4);
console.log(maxArr);

console.log(`-----------------------------------------------`);

const minArr = Math.min(...arr3, ...arr4);
console.log(minArr);

console.log(`-----------------------------------------------`);

const person = { name: "John" };
const job = { role: "Teacher" };

const person2 = { ...person };
console.log(person2);

const employee = { ...person, ...job };

employee.name = "Saad";
console.log(employee);

console.log(`-----------------------------------------------`);

function isWhole(a, b, c, d) {
  console.log(a, b, c, d);
  const avg = (a + b + c + d) / arguments.length;
  console.log(avg % 2 == 0 ? true : false);
}

isWhole(1, 2, 3, 4);
isWhole(9, 2, 2, 5);
isWhole([2, 2, 2, 2]);
