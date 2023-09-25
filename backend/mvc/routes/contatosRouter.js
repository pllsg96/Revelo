// routes/contatos.js

const express = require('express');
const contatosController = require('../controllers/contatosController');
const contatosRouter = express.Router();

contatosRouter.get('/', contatosController.getAllContatos);

module.exports = contatosRouter;
