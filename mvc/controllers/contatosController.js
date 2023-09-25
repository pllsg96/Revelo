//controllers/contatosControllers.js

const contatoModel = require('../models/contatosModel');

const getAllContatos = async (req, res) => {
  try {
    const [contatos] = await contatoModel.getAllContatos();
    console.log(contatos)
    res.render('contatosView', { contatos: contatos });
  } catch (error) {
    console.error('Erro ao recuperar contatos:', error);
    res.status(500).json({ error: 'Erro ao recuperar contatos' });
  }
};

module.exports = {
  getAllContatos
};
