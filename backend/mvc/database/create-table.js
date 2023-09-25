const db = require('./db');

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  const createTableSQL = 'DROP TABLE IF EXISTS contatos;';
  db.query(createTableSQL, (error) => {
    if (error) {
      console.error('Erro ao remover a tabela existente:', error);
      db.end();
    } else {
      const createTableSQL = `
        CREATE TABLE contatos (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nome VARCHAR(255) NOT NULL,
          telefone VARCHAR(8) NOT NULL,
          idade INT
        );
      `;

      db.query(createTableSQL, (createError) => {
        if (createError) {
          console.error('Erro ao criar a tabela:', createError);
          db.end();
        } else {
          console.log('Tabela criada com sucesso');

          const insertDataSQL = `
            INSERT INTO contatos (nome, telefone, idade)
            VALUES ('Fulano', '9999999', 30);
          `;

          db.query(insertDataSQL, (insertError) => {
            if (insertError) {
              console.error('Erro ao inserir dados na tabela:', insertError);
            } else {
              console.log('Dados inseridos com sucesso');
            }
            db.end();
          });
        }
      });
    }
  });
});
