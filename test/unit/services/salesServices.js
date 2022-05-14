const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const { createPostService, upSalesService, salesDelete } = require('../../../services/salesService');

describe('Requisito 1 - salesService', () => {
    before( async () => {
        const retorno = [[{
            saleId: 1,
            itemsSold: [],
            itemUpdated: [],
        }]];
        sinon.stub(connection, 'execute').resolves(retorno);
    });
    after(async () => {
        connection.execute.restore();
    });
    /* it('verifica se a função createPostService retorna um objeto com as chaves "id, name, quantity"', async () => {
        // etirna um objeto com a chave saleId e um objeto como segunda chave itemsSold e recebe um array  
        const array = [];
        const getproducts = await createPostService(array);  
        console.log(getproducts);      
        expect(getproducts).to.be.includes.all.keys(
            'saleId',
            'itemsSold',
        );
    });
    it('verifica se a função upSalesService retorna um objeto com as chaves "id, name, quantity"', async () => {
        // retirna um objeto com a chave saleId e um objeto como segunda chave itemUpdated recebe um array e um id
        const id = 1;
        const array = [];
        const getproducts = await upSalesService(id, array);        
        expect(getproducts).to.be.includes.all.keys(
            'saleId',
            'itemUpdated',
        );
    }); */
    it('verifica se a função salesDelete retorna aldo diferente de "undefined"', async () => {
        const getproducts = await salesDelete();        
        expect(getproducts).to.not.be.undefined;
    });
});