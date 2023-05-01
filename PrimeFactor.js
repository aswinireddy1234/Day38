function primeFactorsToArray(n) {
    var primeFactors = [];
  
    // Divide by 2 until the result is odd
    while (n % 2 === 0) {
      primeFactors.push(2);
      n /= 2;
    }
  
    // Check odd factors up to the square root of n
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  
    // Handle the case where n is a prime greater than 2
    if (n > 2) {
      primeFactors.push(n);
    }
  
    return primeFactors;
  }
  
  // Define a number to find the prime factors of
  var n = 315;
  
  // Find the prime factors of n and store them in an array
  var factors = primeFactorsToArray(n);
  
  // Output the array of prime factors
  console.log("Prime factors of " + n + ": " + factors);