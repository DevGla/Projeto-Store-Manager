const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('Camada Service - sales', () => {
    describe('Função getAllSalesService', () => {
        const response = {};
        const request = {};
        const retorno = [];
        before(() => {
            sinon.stub(salesModel, 'getAllSalesModel').resolves(retorno);
        });
        after(() => {
            salesModel.getAllSalesModel.restore();
        })
        it('Quando a Função getAllSalesService é chamada o retorno é um array', async () => {
            const retornoFuncao = await salesService.getAllSalesService();
            expect(retornoFuncao).to.be.an('array');
        })
    })
})