const WebSocket = require('ws');
const mysql = require('mysql2');

// Configuração do servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });
console.log('Servidor rodando na porta 8080');

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senhadificil',
  database: 'esp32db'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const brightness = parseFloat(message);

    // Query para inserir o valor no banco de dados
    const query = "INSERT INTO Measurements (brightness) VALUES (?)";
    db.query(query, [brightness], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados: ' + err.message);
      } else {
        console.log('Dados inseridos no banco de dados');
      }
    });
  });
});
