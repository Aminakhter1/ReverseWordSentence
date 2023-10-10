function reverseWords(sentence) {
  // split the sentence into words
  const words = sentence.split(" ");

  // reverse each word and store them in an array
  const reversedWords = words.map((word) => {
    // Reverse the characters of the word
    return word.split("").reverse().join("");
  });

  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
