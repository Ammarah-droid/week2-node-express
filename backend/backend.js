const numbers = [1, 2, 3, 4, 5];
// map - transfer each element
const doubled=numbers.map(num => num * 2);
console.log(doubled);
// filter - select elements based on a condition
const evens=numbers.filter(num=> num%2===0);
console.log(evens);
// find - locate the first element that matches a condition
const found=numbers.find(num => num > 3);
console.log(found);
// reduce - combine all elements into a single value
const sum=numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);

const users=[
    {name: "Alice", age:17, role:"user"},
    {name: "Bob", age:25, role:"admin"},
    {name:"jill", age:30, role:"user"}
];

const adults = users.filter(user=> user.age>=18);
console.log(adults);

const adminName=users
    //get only object where role is admin
    .filter(user=>user.role==="admin")
    //get only name string from admin
    .map(user=> user.name);
    console.log(adminName);