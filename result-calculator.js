// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function resultCalculator(marks) {
  if (marks < 0) {
    return "Please Enter a Positive Value..";
  } else if (typeof marks == "string") {
    return "Your marks can not be string";
  } else if (typeof marks == "undefined") {
    return "You don't give us any information";
  } else if (marks >= 80) {
    return "Wow!! You got A+. All the best...";
  } else if (marks < 80 && marks >= 70) {
    return "You got A. Almost close from A+.";
  } else if (marks < 70 && marks >= 60) {
    return "You gor A-. Try best";
  } else if (marks < 60 && marks >= 50) {
    return "you got B";
  } else if (marks < 50 && marks >= 40) {
    return "you got C";
  } else if (marks < 40 && marks >= 33) {
    return "You got D";
  } else {
    return "Oh great!! You are our pride. keep it up";
  }
}

console.log(resultCalculator(01));
