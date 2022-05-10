const express = require('express');
const { getAllProducts, getAllProductsbyId } = require('./controllers/productsController');
const { getAllSales, getAllSalesById } = require('./controllers/salesController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProducts);
app.get('/products/:id', getAllProductsbyId);

app.get('/sales', getAllSales);
app.get('/sales/:id', getAllSalesById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
