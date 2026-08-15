//backend assignment

const users = [
    { name: "Ammarah", age: 21, programmingLanguage: "python" }
].map(user => ({
    name: user.name,
    age: user.age,
    programmingLanguage: user.programmingLanguage
}));
console.log(users);