// write a function is the year is leap year or not

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "It is a Leap Year";
  } else {
    return "It is a normal Year";
  }
}

console.log(isLeapYear(2100));
