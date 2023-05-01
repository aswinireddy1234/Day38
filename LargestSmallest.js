var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100);
}

// Find the 2nd largest and 2nd smallest elements without sorting the array
var largest = numbers[0];
var secondLargest = numbers[0];
var smallest = numbers[0];
var secondSmallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest) {
    secondLargest = numbers[i];
  }

  if (numbers[i] < smallest) {
    secondSmallest = smallest;
    smallest = numbers[i];
  } else if (numbers[i] < secondSmallest) {
    secondSmallest = numbers[i];
  }
}

// Output the results
console.log("Random numbers: " + numbers);
console.log("2nd largest element: " + secondLargest);
console.log("2nd smallest element: " + secondSmallest);
