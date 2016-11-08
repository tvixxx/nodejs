import express from 'express';

const app = express();

// Первый вариант решения задачи
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

// Второй вариант решения задачи
app.get('/', (req, res) => {
  const url = req.query;
  const {a, b} = url;

  const sumNumbers = (...values) => { 
    return values.reduce( (a, b) =>   (a ? +a : +!!a) +  (b ? +b : +!!b) ); 
  };
  const result = sumNumbers(a, b);
  console.log(result);
  res.json({
    url: url,
    result: result
  });
});
