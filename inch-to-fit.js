// write a function how to convert inch to foot

function inchToFit(inch) {
  const foot = inch / 12;
  const finalResult = foot.toFixed(2);
  return parseFloat(finalResult);
}

console.log(inchToFit(20));

// write a function how to convert miles to km

function milesToKm(miles) {
  const km = miles * 1.60934;
  const result = km.toFixed(2);
  return parseFloat(result);
}

console.log(milesToKm(36));
