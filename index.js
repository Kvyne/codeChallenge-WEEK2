function swapCharacter(str) {
    // Create an empty string to store the swapped characters
    let swappedString = "";
  
    // Loop through each character in the input string
    for (let char of str) {
      // Check if the character is uppercase
      if (char === char.toUpperCase()) {
        // Convert to lowercase and add to the swapped string
        swappedString += char.toLowerCase();
      } else {
        // Convert to uppercase and add to the swapped string
        swappedString += char.toUpperCase();
      }
    }
  
    // Return the swapped string
    return swappedString;
  }
  
  // Example usage
  const inputString = "My Code Name Is Keycode";
  const swappedString = swapCharacter(inputString);
  console.log(swappedString); // Output: 