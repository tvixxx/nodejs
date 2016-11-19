import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  let username = '';
  let match = (req.query.username).match(/(?:(?:https?:)?(?:\/\/)?(?:www\.)?(?:[\w_\-0-9]*)\.(?:[^\/]{2,})\/)?(?:@)?([^\?\/]*)/i);
  
  let userPosition = match[1];

  if (match) {
    username = userPosition;
  }

  req.username = username ? `@${username}` : 'Invalid username';
  res.send(req.username);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
