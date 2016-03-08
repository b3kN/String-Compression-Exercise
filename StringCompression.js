var initString = "aaaafffvvvdssdddddddddefeffffff";

document.write(initString);
document.write('<br />');

var charArray = [],
    countArray = [],
    finalString = '';

for (var a = 0; a < initString.length; a++) {
  var character = initString.charAt(a);
  if (charArray.length == 0) {
    charArray.push(character);
    countArray.push(1);
  } else {
    if (charArray[charArray.length - 1] == character) {
      countArray[charArray.length - 1]++;
    } else {
      charArray.push(character);
      countArray.push(1);
    }
  }
}

for (var b = 0; b < charArray.length; b++) {
  finalString += charArray[b] + countArray[b];
}

if (finalString.length >= initString.length) {
  finalString = initString;
}

document.write(finalString);
return finalString;