// write a function how to find factorial value using for loop

function factorialConverter(number) {
  let factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorialConverter(5));
