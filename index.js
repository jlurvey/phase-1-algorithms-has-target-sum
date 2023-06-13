function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array [j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate through each number in the array using a nested loop
	  Calculate sum of current pair of numbers
	  If sum equals target number, return true
  
  If no match is found, return false
*/

/*
  Add written explanation of your solution here
  Using a nested loop, we iterate through each pair of numbers in the array, starting with index 0, adding it to the next index position, checking to see if the sum equals the target, then moving to the next index position. After index 0 has been iterated through, we move forward to index 1 and so on and so forth. We return true if there's a match, and if no match is found through all iterations, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 10, 30], 29));
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
