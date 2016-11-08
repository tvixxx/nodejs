import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const url = req.query;
  const {a, b} = url;
  const minLetters = 1;

  const sumNumbers = (...values) => {
    let res = 0;

    for (let i = 0; i < values.length; i++ ) {

      if (isNaN(values[i])) {
        continue;
      }

      if (values[i].length > minLetters) {
        return res = 0;
      }

      console.log(values);
      res += parseInt(values[i]);
    }
    return res;
  };

  const result = sumNumbers(a, b);
  
  // Вывод данных для наглядности
  res.json({
    url: url,
    result: result
  });
});
