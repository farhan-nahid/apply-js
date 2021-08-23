/*
const number = -5.789;
console.log(Math.abs(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log(Math.random());
*/

// ludo function

function ludo(n) {
  let ludoNumber = 0;
  for (let i = 0; i <= n; i++) {
    ludoNumber = Math.random() * 6;
  }
  return Math.round(ludoNumber);
}

console.log("Your Point: ", ludo(10));
