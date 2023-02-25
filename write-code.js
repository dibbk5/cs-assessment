//////////////////////////////////////////////////////
testArray = [1, 2, 3, 4, -1];

function sumZero(array) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    }
  }
  if (newArray.includes(true) === true) {
    return true;
  } else {
    return false;
  }
}

console.log(sumZero(testArray));
//I believe this is O(n) runtime
//////////////////////////////////////////////////////

testWord = "Something";

function uniqueCharacters(string) {
  let newString = "";
  let newArray = [];

  for (let i = 0; i < string.length; i++) {
    if (newString.includes(string[i]) === false) {
      newArray.push(true);
      newString += string[i];
    } else {
      newArray.push(false);
      newString += string[i];
    }
  }
  if (newArray.includes(false) === true) {
    return false;
  } else {
    return true;
  }
}

console.log(uniqueCharacters(testWord));
//I believe this is O(n)
//////////////////////////////////////////////////////

testSentence = "The quick brown fox jumps over the lazy dog!";

function pangramSentence(sentence) {
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  sentence = sentence.toLowerCase();
  return alphabet.every((elem) => sentence.includes(elem));
}

console.log(pangramSentence(testSentence));

//I believe this is O(1)
//////////////////////////////////////////////////////
testWordArray = ["Hi", "Hello", "Wow"];

function longestWord(array) {
  let longWord = 0;
  let wordLength = 0;
  for (i = 0; i < array.length; i++) {
    wordLength = array[i].length;
    if (wordLength > longWord) {
      longWord = wordLength;
    }
  }
  return longWord;
}

console.log(longestWord(testWordArray));

//I believe this is O(n)
//////////////////////////////////////////////////////
