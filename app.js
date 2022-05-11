const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllProducts,
  getAllProductsbyId,
  createProductBd } = require('./controllers/productsController');

const { getAllSales, getAllSalesById } = require('./controllers/salesController');

const { validateName, validadeQuantity } = require('./middlewares/productsMiddlewares');
const {
  validateProduct,
  validadeQuantitySales,
  postSales } = require('./middlewares/salesMiddlewares');
const { productExist } = require('./middlewares/productExistMiddleware');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProducts);
app.get('/products/:id', getAllProductsbyId);

app.post('/products', validateName, validadeQuantity, productExist, createProductBd);
app.post('/sales', validateProduct, validadeQuantitySales, postSales);

app.get('/sales', getAllSales);
app.get('/sales/:id', getAllSalesById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
