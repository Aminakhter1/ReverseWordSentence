function reverseWordSentence(sentence) {
  let reversedSentence = "";
  let wordStart = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length - 1) {
      // Found a word boundary or reached the end of the sentence
      const wordEnd = i === sentence.length - 1 ? i : i - 1;
      reversedSentence += reverseWord(sentence, wordStart, wordEnd);

      if (i !== sentence.length - 1) {
        reversedSentence += " ";
      }

      wordStart = i + 1;
    }
  }
   return reversedSentence;
}
function reverseWord(sentence, start, end) {
  let reversedWord = "";
  for (let i = end; i >= start; i--) {
    reversedWord += sentence[i];
  }
  return reversedWord;
}

// Example used
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordSentence(inputSentence);
console.log(reversedSentence);
