// Initialize an empty array to store the repeated digits
var repeatedDigits = [];

// Loop through the range from 0 to 100
for (var i = 0; i <= 100; i++) {
  // Convert the number to a string so we can check its digits
  var str = i.toString();
  
  // Check if the string has a length of 2 and its digits are the same
  if (str.length === 2 && str.charAt(0) === str.charAt(1)) {
    // Add the repeated digit to the array
    repeatedDigits.push(str);
  }
}

// Output the array of repeated digits
console.log("Repeated digits: " + repeatedDigits);