const sinon = require('sinon');
const { expect } = require('chai');

const productService = require('../../../services/procuctsService');
const productModel = require('../../../models/productsModel');

describe('Camada Service - Products', () => {
    describe('Função getAllProductsService', () => {
        before(() => {
            const retorno = [{"id": 1,"name": "Martelo de Thor","quantity": 10}];
            sinon.stub(productModel, 'getAllProductsModel').resolves(retorno);
        });
        after(() => {
            productModel.getAllProductsModel.restore();
        });
        it('Quando a função getAllProductsService é chamada retorna um array', async () => {
            const retornoFuncao = await productService.getAllProductsService();
            expect(retornoFuncao).to.be.an('array');
        })
    })
})