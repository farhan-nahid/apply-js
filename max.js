const business = 450;
const minister = 350;
const army = 600;

if (business > minister && business > army) {
  console.log("business person er pola bigger");
} else if (minister > business && minister > army) {
  console.log("minister er pola bigger");
} else {
  console.log("army er pola bigger");
}

// using math.max

console.log("Biggest Number is: ", Math.max(business, minister, army));
