//  সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

function interest(taka, year, percent) {
  if (taka < 0 || year < 0 || percent < 0) {
    return "You don't give us negative information";
  } else if (
    typeof taka == "string" ||
    typeof year == "string" ||
    typeof percent == "string"
  ) {
    return "You don't give us string type value";
  } else if (
    typeof taka == "undefined" ||
    typeof year == "undefined" ||
    typeof percent == "undefined"
  ) {
    return "You don't give us all information";
  } else {
    return taka + year * (percent / 100) * taka;
  }
}

console.log(interest(100, 5, 10));
