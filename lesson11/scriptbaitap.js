//C1
let names1 = ["John", "Alice"];
names1.push ("Tom");
console.log(names1);

//C2
let numbers2 = [1, 2, 3, 4];
let resutl2 = numbers2.map(num => num ** 2)
console.log(resutl2)

//C3
let numbers3 = [5, 10, 15, 20, 25];
let result3 = numbers3.filter(num => num % 2 == 0);
console.log(result3);

//C4
let names4 = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
let result4 = names4.find(item => item.score >= 8);
console.log(result4);

//C5
let numbers5 = [3, 5, 8, 12, 15];
let result5 = numbers5.findIndex(num => num > 10);
console.log(result5);

//C6
let arr6 = ['a', 'b', 'c', 'd', 'e'];
arr6.splice(3, 1, 'f');
console.log(arr6);

//C7
let student7 = { name: 'Tom', age: 21, major: 'Computer Science' };
let result7 = Object.keys(student7);
console.log(result7);

//C8
let student8 = { name: 'Tom', age: 21, major: 'Computer Science' };
let result8 = Object.values(student8);
console.log(result8);

//C9
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let result9 = Object.assign({}, obj1, obj2);
console.log(result9);

//C10
let numbers10 = [1, 2, 3];
let result10 = [...numbers10, 4];
console.log(result10);

//C11
let objA = { name: 'Alice', age: 25 };
let objB = { job: 'Developer' };
let result11 = { ...objA, ...objB };
console.log(result11);

//C12
let names12 = ['john', 'alice', 'tom'];
let result12 = names12.map((name) => {
  return name.toUpperCase();
});
console.log(result12);

//C13
let numbers13 = [1, 2, 3, 4, 5, 6];
let result13 = numbers13
  .filter(num => num % 2 === 0)
  .reduce((total, num) => total + num, 0);
console.log(result13);

//C14
let numbers14 = [1, 2, 2, 3, 4, 4, 5];
let result14 = [...new Set(numbers14)];
console.log(result14);

//C15
let arr15 = ['a', 'b', 'a', 'c', 'b', 'a'];
let result15 = arr15.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(result15);
