// createProductBD retorna um objeto com id, name, quantity recebe name, quantity
// UpdateProductService retorna um objeto com id, name, quantity recebe name, quantity, id
// deleteService tem que ser diferente de undefined e recebe um id
const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const { createProduct, UpdateProductService, deleteService } = require('../../../services/procuctsService');

describe('Requisito 1 - productService', () => {
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
    it('verifica se a função createProduct retorna um objeto com as chaves "id, name, quantity"', async () => {
        const name = "Traje de encolhimento";
        const quantity = 20;
        const getproducts = await createProduct(name, quantity);        
        expect(getproducts).to.be.includes.all.keys(
            'id',
            'name',
            'quantity',
        );
    });
    it('verifica se a função UpdateProductService retorna um objeto com as chaves "id, name, quantity"', async () => {
        const id = 1;
        const name = 'Traje de encolhimento';
        const quantity = 20;
        const getproducts = await UpdateProductService(id, name, quantity);        
        expect(getproducts).to.be.includes.all.keys(
            'id',
            'name',
            'quantity',
        );
    });
    it('verifica se a função deleteService retorna aldo diferente de "undefined"', async () => {
        const getproducts = await deleteService();        
        expect(getproducts).to.not.be.undefined;
    });
});