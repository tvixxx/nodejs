import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  const url = req.query;
  const { fullname } = url;

  const getConvertedFullName = (fullNameUser) => {
    var fail = false;

    console.log(fullNameUser);
    const maxWords = 3;
    const invalidPhrase = 'Invalid fullname';
    const arrayOfUserName = fullNameUser.split(' ');
    const re = /[a-zA-Z]+/g;

    // q.match(/[a-zA-Z]+/g).length === 1

    const testOnRegEx = (userName) => {
      if (userName.match(re) === 1 ) {
        return invalidPhrase;
      }
    };

    testOnRegEx(arrayOfUserName[0]);

    if ( (arrayOfUserName.length > maxWords) || (arrayOfUserName == '') ) {
      return invalidPhrase;
    }

    let getSurName = arrayOfUserName.pop();

    let arrayOfAbbreviation = arrayOfUserName.map( (word) => {

      if (testOnRegEx(word)) {
        console.log(word);

        return fail = true;
      }
      return word.charAt(0) + '.';
    });

    if (fail) {
      return invalidPhrase;
    }

    return [getSurName, ...arrayOfAbbreviation].join(' ');
  };

  const result = getConvertedFullName(fullname);

  res.status(200).send((result).toString());
});
