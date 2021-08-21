/*

  তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউট পুট রিটার্ন করবে

*/

function fahrenheitToCelsius(celsius) {
  if (celsius < 0) {
    return "Please Enter a Positive Value..";
  } else if (typeof celsius == "string") {
    return "You can not covert a string";
  } else {
    return celsius * 33.8;
  }
}

console.log(fahrenheitToCelsius("122"));

/*

  তোমাকে ফাংশনের ইনপুট হিসেবে ফারেনহাইট দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা সেলসিয়াস এ কনভার্ট করে সেটার আউট পুট রিটার্ন করবে

*/

function celsiusToFahrenheit(fahrenheit) {
  if (fahrenheit < 0) {
    return "Please Enter a Positive Value..";
  } else if (typeof fahrenheit == "string") {
    return "You can not covert a string";
  } else {
    return fahrenheit / 33.8;
  }
}

console.log(celsiusToFahrenheit(-338));
