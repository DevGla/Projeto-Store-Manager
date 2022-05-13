const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const {allSales, getSalesbyId, getSales} = require('../../../models/salesModel');

describe('Requisito 1 - salesModels', () => {
    before( async () => {
        const retorno = [[{
            saleId: 1,
            date: '2022-05-13 17:21:03',
            quantity: 20,
            productId: 1,
        }]];
        sinon.stub(connection, 'execute').resolves(retorno);
    });
    after(async () => {
        connection.execute.restore();
    });
    it('verifica se a função allSales retorna um array', async () => {
        const getproducts = await allSales();        
        expect(getproducts).to.be.a('array');
    });
    it('verifica se a função getSalesbyId retorna um objeto com: "saleId, date, quantity, productId"', async () => {
        const id = 1;
        const [getProductById] = await getSalesbyId(id);
        expect(getProductById).to.be.includes.all.keys(
            'saleId',
            'date',
            'productId',
            'quantity',
        );
    });
    it('verifica se a função getSales retorna um array"', async () => {
        const id = 1;
        const getproducts = await getSales();   
        expect(getproducts).to.be.a('array');
    });
});