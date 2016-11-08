import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const url = req.query;
  const { fullname } = url;

  const getConvertedFullName = (fullNameUser) => {

    let maxWords = 4;
    let invalidPhrase = 'Invalid fullName';
    let arrayOfUserName = fullNameUser.split(' ');

    if (arrayOfUserName.length >= maxWords) {
      return invalidPhrase;
    }

    let getSurName = arrayOfUserName.pop();

    let arrayOfAbbreviation = arrayOfUserName.map( (word) => word.charAt(0) + '.');

    return [getSurName, ...arrayOfAbbreviation].join(' ');
  };

  const result = getConvertedFullName(fullname);

  // Вывод данных для наглядности
  res.json({
    url: url,
    result: result
  });
});
