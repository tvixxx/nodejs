// Клиент делает GET запрос с параметрами Query: ?a и ?b в которых записаны числа, необходимо вывести сумму этих чисел.
// Результат нужно вывести в виде строки. 
// Если какой-то параметр не передан или не конвертируется в число, он считается равных нулю (0).

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

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

  res.status(200).send((result).toString());
});

