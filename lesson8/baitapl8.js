// C1:
// C1:
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names[0]);
console.log(names[4]);

// C2:
const names2 = ["John", "Jane", "Jim", "Jake"];
names2[1]="Mary";
console.log(names2);

// C3:
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for(let i =0 ;i<=names3.length;i++)
{
    console.log(names3[i]);
}

// C4:
const names4 = ["Alice", "Bob", "Charlie", "David"];
names4.push("MindX");
console.log(names4);

// C5:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < numbers.length; i++) 
{
    if(numbers[i] % 2 !== 0) 
    {
    console.log(numbers[i]);
    }
}

//C6:
const names5 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const searchName = "David";
for(let i = 0; i < names5.length; i++)
{
    if(names5[i] === searchName)   
    {
        console.log(names5[i]);
        break;
    }
}

// C7:
const numbers2 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count = 0;
for (let i =0; i < numbers2.length; i++)
{
    if(numbers2[i] == targetCounting)
    {
        count++;
    }
}
console.log(`Số ${targetCounting} xuất hiện ${count} lần`);

// C8:
const numbers3 = [5, 2, 9, 3, 7, 11, 8];
let max = numbers3[0];
for (let i = 1; i < numbers3.length; i++)
{
    max = (numbers3[i] > max) ? numbers3[i] : max;
}
console.log(max);

//C9:
const numbers4 = [1, 2, 3, 4, 5];
numbers4.reverse();
console.log(numbers4);

//C10:
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const result = [];
for(let i = 0; i < duplicatesArray.length ; i++)
{
    if(!result.includes(duplicatesArray[i]))
    {
        result.push(duplicatesArray[i]);
    }
}
console.log(result);

//C11:
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0; 
for (let i = 0; i < numbers5.length; i++) 
{
    sum = sum + numbers5[i]; 
}
console.log(sum);