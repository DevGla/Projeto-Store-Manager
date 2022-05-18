const { expect } = require('chai');
const sinon = require('sinon');
const productController = require('../../../controllers/productsController');
const productService = require('../../../services/procuctsService');

describe('Camada Controller - Products', () => {
    describe('Função getAllProductsController', () => {
        //retorno getAllProductsController é um [{id, name, quantity}]
        const request = {};
        const response = {};
        before(() => {            
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns([{"id": 1,"name": "Martelo de Thor","quantity": 10}]);
            sinon.stub(productService, 'getAllProductsService').resolves([{"id": 1,"name": "Martelo de Thor","quantity": 10}]);
        });
        after(() => {
            // retorno getAllProductsService é um [{id, name, quantity}]
            productService.getAllProductsService.restore();
        });
        it('Quando a função getAllProductsController é chamada o metodo status retorna 200', async () => {
            await productController.getAllProductsController(request, response);
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
        it('Qaundo a função getAllProductsController é chamada o retorno é um array', async () => {
            await productController.getAllProductsController(request, response);
            expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        })
    })
});
