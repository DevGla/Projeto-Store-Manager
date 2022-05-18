const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllProductsController,
  getProductById,
  createProductBd, 
  updateProduct,
  deleteProduct, postSales, updateSales } = require('./controllers/productsController');

const { getAllSalesController,
  getAllSalesById,
  salesDeleteController } = require('./controllers/salesController');

const { validateName, validadeQuantity } = require('./middlewares/productsMiddlewares');
const {
  productExist,
  productExistUpdate,
  productExistDelete } = require('./middlewares/productExistMiddleware');
const { salesExistDelete } = require('./middlewares/salesMiddlewares');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProductsController);
app.get('/products/:id', getProductById);
app.get('/sales', getAllSalesController);
app.get('/sales/:id', getAllSalesById);

// Requisito 4 feito com ajuda do Aluno Jonatas Lima, Requisito da rota abaixo
app.post('/products', validateName, validadeQuantity, productExist, createProductBd);

// Requisito 7 feito com ajuda do Aluno Jonatas Lima! Requisito da rota abaixo
app.post('/sales', postSales);

app.put('/sales/:id', updateSales);

app.put('/products/:id', validateName, validadeQuantity, productExistUpdate, updateProduct);

app.delete('/products/:id', productExistDelete, deleteProduct);
app.delete('/sales/:id', salesExistDelete, salesDeleteController);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
