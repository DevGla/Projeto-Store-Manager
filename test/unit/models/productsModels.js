const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productsModel');

describe('Camada model - Products', () => {
    describe('Função getAllProductsModel', () => {
        const retorno = [
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
        ];
        before(() => {
            sinon.stub(connection, 'execute').resolves(retorno);
        });
        after(() => connection.execute.restore())
        it('Quando a função getAllProductsModel é chamada retorno retorna um objeto com: "id, name, quantity"', async () => {
            const retornofuncao = await productModel.getAllProductsModel();
            expect(retornofuncao).to.be.includes.all.keys(
                'id',
                'name',
                'quantity',
            );
        })
    })
});