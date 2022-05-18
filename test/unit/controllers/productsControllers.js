const sinon = require('sinon');
const { expect } = require('chai');

const productController = require('../../../controllers/productsController');
const productService = require('../../../services/procuctsService');

describe('Camada Controller - Products', () => {
    describe('Função getAllProductsController', () => {
        const request = {};
        const response = {};
        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(productService, 'getAllProductsService'). resolves([
                {
                    "id": 1,
                    "name": "Martelo de Thor",
                    "quantity": 10
                },
                {
                    "id": 2,
                    "name": "Traje de encolhimento",
                    "quantity": 20
                },
                {
                    "id": 3,
                    "name": "Escudo do Capitão América",
                    "quantity": 30
                }
            ]);
        });
        after(() => {
            productService.getAllProductsService.restore();
        });
        it('Quando a função getAllProductsController é chamada o metodo status retorna 200', async () => {
            await productController.getAllProductsController(request, response);
            expect(response.status.calledWith(200)).to.be.equal(true);
        })
    })
});
