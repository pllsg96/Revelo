const express = require('express');
const path = require('path');
const app = express();

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const contatosRouter = require('./routes/contatosRouter');

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/contatos', contatosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
