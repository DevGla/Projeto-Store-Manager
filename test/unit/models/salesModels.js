const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Camada Model - sales', () => {
  describe('Função getAllSalesModel', () => {
      const retorno  = [
          {
              "saleId": 1,
              "date": "2022-05-18T14:09:25.000Z",
              "productId": 1,
              "quantity": 5
          },
          {
              "saleId": 1,
              "date": "2022-05-18T14:09:25.000Z",
              "productId": 2,
              "quantity": 10
          },
          {
              "saleId": 2,
              "date": "2022-05-18T14:09:25.000Z",
              "productId": 3,
              "quantity": 15
          }
      ];
    before(() => {
        sinon.stub(connection, 'execute').resolves(retorno);
    })
    after(() => {connection.execute.restore()})
  });
  it('Quando a função getAllSalesModel é chamada o retorno é um array', async () => {
      const retornoFuncao = await salesModel.getAllSalesModel();
      expect(retornoFuncao).to.be.an('array');
  })
});
