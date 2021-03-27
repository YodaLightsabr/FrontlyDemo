const express = require('express');
const Frontly = require('frontly');

const app = express();
app.use(Frontly.middleware);

app.get('/', (req, res) => {
  res.sendFileFrontly(__dirname + '/index.html', {
    params: {
      Title: "Hello, world!"
    }
  });
});

app.listen(8080, () => {
  console.log('Server listening on *:8080');
});
