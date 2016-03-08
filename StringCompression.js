var initString = "aaaafffvvvdssdddddddddefeffffff";

var charArray = [],     // Init array for holding characters.
    countArray = [],    // Init array for holding count of characters.
    finalString = '';   // Init string placeholder for final string value.

// For each character within the initial string:
for (var a = 0; a < initString.length; a++) {
    
  // Set character variable based upon character position.
  var character = initString.charAt(a);
  
  // If character array is empty,
  // then add first character found to character array,
  // add add first count to count array.
  if (charArray.length == 0) {
    charArray.push(character);
    countArray.push(1);
  } else {
      
    // If character is same as the last one in character array,
    // then increment the value in count array at last position.
    if (charArray[charArray.length - 1] == character) {
      countArray[charArray.length - 1]++;
      
    // Else, push character to character array,
    // and add first count for new character to count array.
    } else {
      charArray.push(character);
      countArray.push(1);
    }
  }
}

// For each item in character array,
// append final string with values from character and count arrays.
for (var b = 0; b < charArray.length; b++) {
  finalString += charArray[b] + countArray[b];
}

// If final string is longer or equal to the initial string,
// set the final string to be the same as the initial string.
if (finalString.length >= initString.length) {
  finalString = initString;
}

return finalString;
