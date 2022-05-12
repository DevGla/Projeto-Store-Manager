const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllProducts,
  getAllProductsbyId,
  createProductBd, 
  updateProduct,
  deleteProduct } = require('./controllers/productsController');

const { getAllSales, getAllSalesById } = require('./controllers/salesController');

const { validateName, validadeQuantity } = require('./middlewares/productsMiddlewares');
const {
  validateProduct,
  validadeQuantitySales,
  postSales } = require('./middlewares/salesMiddlewares');
const {
  productExist,
  productExistUpdate,
  productExistDelete } = require('./middlewares/productExistMiddleware');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProducts);
app.get('/products/:id', getAllProductsbyId);
app.get('/sales', getAllSales);
app.get('/sales/:id', getAllSalesById);

// Requisito 4 feito com ajuda do Aluno Jonatas Lima

app.post('/products', validateName, validadeQuantity, productExist, createProductBd);
app.post('/sales', validateProduct, validadeQuantitySales, postSales);

app.put('/products/:id', validateName, validadeQuantity, productExistUpdate, updateProduct);

app.delete('/products/:id', productExistDelete, deleteProduct);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
