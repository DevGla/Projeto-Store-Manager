const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productsController');

const salesController = require('./controllers/salesController');

const productMiddleware = require('./middlewares/productsMiddlewares');
const productExistMiddleware = require('./middlewares/productExistMiddleware');
const salesMiddleware = require('./middlewares/salesMiddlewares');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProductsController);
app.get('/products/:id', productsController.getProductById);
app.get('/sales', salesController.getAllSalesController);
app.get('/sales/:id', salesController.getAllSalesById);

// Requisito 4 feito com ajuda do Aluno Jonatas Lima, Requisito da rota abaixo
app.post('/products',
productMiddleware.validateName,
productMiddleware.validadeQuantity,
productExistMiddleware.productExist, productsController.postProduct);

// Requisito 7 feito com ajuda do Aluno Jonatas Lima! Requisito da rota abaixo
app.post('/sales', productsController.postSales);

app.put('/sales/:id', productsController.updateSales);

app.put('/products/:id', productMiddleware.validateName,
productMiddleware.validadeQuantity,
productExistMiddleware.productExistUpdate, productsController.updateProduct);

app.delete('/products/:id',
productExistMiddleware.productExistDelete, productsController.deleteProduct);
app.delete('/sales/:id', salesMiddleware.salesExistDelete, salesController.salesDeleteController);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
