const { calculateBalance } = require("./bank");

// run 'npm run bank' to test your implementation based on the following input:
const data = [
    { firstName: "Ziv", lastName: "Ventura", balance: "56.17" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "59.985" },
    { firstName: "Dor", lastName: "Shaked", balance: "13.175" }
]

console.log(calculateBalance(data))