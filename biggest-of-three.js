// write a function to find bigger of the three number

function biggestOfThree(num1, num2, num3) {
  if (
    typeof num1 == "string" ||
    typeof num2 == "string" ||
    typeof num3 == "string"
  ) {
    return "Check Your Numbers. There are string type value";
  } else if (num1 > num2 && num1 > num3) {
    return "Number 1 is biggest";
  } else if (num2 > num1 && num2 > num3) {
    return "Number 2 is biggest";
  } else {
    return "Number 3 is biggest";
  }
}

console.log(biggestOfThree(20, 30, 03));
