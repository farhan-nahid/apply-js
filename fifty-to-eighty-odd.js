// ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।

// while loop

let num = 50;
while (num <= 80) {
  if (num % 2 == 1) {
    console.log(num, " is a odd number");
  }
  num++;
}

// for loop

for (let i = 50; i <= 80; i++) {
  if (i % 2 == 1) {
    console.log(i, " is a odd number");
  }
}
