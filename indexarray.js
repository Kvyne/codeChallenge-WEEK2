//Define a function that accepts two numbers as parameters
function GenerateArray(numFirst, numLast){
    // Create an empty array to store the result
    let array = [];

    // Determine the smaller and larger numbers between numFirst and numLast
    let start = Math.min(numFirst, numLast);
    let end = Math.max(numFirst, numLast);

    // Loop from the smaller number to the larger number, inclusive
    for (let i = start; i <= end; i++) {
    // Add the current number to the array
        array.push(i);
}
// Return the generated array
return array;
}
// Example usage
console.log(GenerateArray(4, 7));
console.log(GenerateArray(-4, 7));