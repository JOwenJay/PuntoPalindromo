const express = require('express');
const app = express();

app.use(express.json());

app.post('/palindrome', (req, res) => {
  const word = req.body.word;

  if (!word || typeof word !== 'string') {
    return res.status(404).json({ message: 'Unable to check the word' });
  }

  const isPalindrome = isWordPalindrome(word);

  if (isPalindrome) {
    return res.status(200).json({ message: `${word} is a Palindrome word.` });
  } else {
    return res.status(302).json({ message: `${word} is not a Palindrome word.` });
  }
});

function isWordPalindrome(word) {
  const wordWithoutSpaces = word.replace(/\s/g, '').toLowerCase();
  const reversedWord = wordWithoutSpaces.split('').reverse().join('');
  return wordWithoutSpaces === reversedWord;
}

const port = 3666;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Palindrome Checker!');
});
