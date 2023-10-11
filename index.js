function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false


function isPalindrome(str) {
  // 1
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  // 2
  while (left < right) {
    // 3
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  // 4
  return true;
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
