const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.use(cors())
/**
 * Metodos HTTP:
 * 
 * GET: Buscar ou Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * TIPOS DE PARAMETROS
  * 
  * Query Params: Parametros nomeados e enviados na rota após simbolo "?" (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da Requisição utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: Table('users').select('*').where()
   */
app.use(express.json())
app.use(routes);

app.listen(3333);
