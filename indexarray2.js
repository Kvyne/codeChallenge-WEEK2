// Function to check if a number is prime
function primeNum(num) {
    if (num <= 1) {
        return false;
    }
    // Check divisibility from 2 to the number - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) { 
            return false;
        }
    }
      return true;
}

// Function to find prime numbers from an array
function findPrimeNumbers(arr) {
    const primeNumbers = [];
    // Loop through each number in the array
    for (let num of arr) {
        // Check if the number is prime using the isPrime function
        if (primeNum(num)) {
            // If it's prime, add it to the primeNumbers array
            primeNumbers.push(num);
        }
    }
    // Return the array of prime numbers
    return primeNumbers;
}

// Testing
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(inputArray);
console.log(primeNumbers); // Output: 
