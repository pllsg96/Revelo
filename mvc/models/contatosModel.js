// model/contatosModel.js

const db = require('../database/db')

const getAllContatos = () => {
  const query = 'SELECT * FROM contatos';
  const result = db.promise().query(query);
  return result;
}

module.exports = {
  getAllContatos
};
