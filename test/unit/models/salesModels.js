/* const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const {allSales, getSalesbyId, getSales} = require('../../../models/salesModel');

describe('Requisito 1 - salesModels', () => {
    before( async () => {
        const retorno = [[{
            id: 1,
            name: 'Traje de encolhimento',
            quantity: 20,
        }]];
        sinon.stub(connection, 'execute').resolves(retorno);
    });
    after(async () => {
        connection.execute.restore();
    });
    it()
}); */