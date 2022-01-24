const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', require('./controller/user/router'));
app.use('/login', require('./controller/login/router'));