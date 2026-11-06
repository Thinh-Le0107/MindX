// C1:
let student = { 
  name: "John", 
  age: 20 
};
student.major = "Computer Science";
console.log(student);

// C2:
let person = {
    name: "Alice",
    age: 25,
    job: "Designer",
}
delete person.job
console.log(person);

// C3:
let car = { brand: "Toyota", model: "Camry", year: 2020 }
let count = 0
for (let i in car){
    count ++
}
console.log(count);

// C4:
let product = { name: "Laptop", price: 1000 };
let result = [
    ["name", product.name],
    ["price", product.price]
];
console.log(result);

// C5:
let products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ];
let result5;
for (let i = 0; i < products.length; i++){
    if (products[i].name === "Camera"){
        result5 = products[i];
        break;
    }
}
console.log(result5);

// C6:
let products6 = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ];
for (let i = 0; i < products6.length; i++) {
    if (products6[i].price > 100){
        console.log(products6[i].name);
    }
}

// C7:
let person7 = { name: "Bob", age: 25, job: "Developer" };
person7.age = 30;
console.log(person7);

// C8:
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let result8 = { ...obj1, ...obj2 };
console.log(result8);

// C9:
let animal = { type: "Dog", name: "Buddy", age: 3 }
for (let i in animal){
    console.log(`${i}: ${animal[i]}`);
}

// C10:
let car10 = { brand: "BMW", model: "X5" }
console.log("color" in car10);