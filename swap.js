let first = 10;
let second = 20;

// swap using temp

let temp = first;
first = second;
second = temp;
console.log("result: ", first, second);

// swap using destructing

[first, second] = [second, first];
console.log(first, second);
