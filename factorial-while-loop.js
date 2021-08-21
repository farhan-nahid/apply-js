// write a function how to find factorial value using while loop

function factorialConverter(number) {
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

console.log(factorialConverter(6));
