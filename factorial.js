/*
1! = 1;
2! = 2 X 1;
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
*/

//  how to find factorial value

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
}

console.log(factorial);
