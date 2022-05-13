const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const {
    allProductsModel,
    getProductsbyIdModel,
    getProductsbyIdModelUpdate
} = require('../../../models/productsModel');
// allproductsModel retorna id / name / quantity - array de objetos
// getProductsIdmodel retorna  - objeto
// getProductsbyIdModelUpdate retorn id / name / quantity - objeto
describe('Requisito 1 - productModels', () => {
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
    it('verifica se a função allProductsModel retorna um array', async () => {
        const getproducts = await allProductsModel();        
        expect(getproducts[0]).to.be.a('object');
    });
    it('verifica se a função getProductsIdModel retorna um objeto com: "id, name, quantity"', async () => {
        const id = 1;
        const getProductById = await getProductsbyIdModel(id);
        expect(getProductById).to.be.includes.all.keys(
            'id',
            'name',
            'quantity',
        );
    });
    it('verifica se a função getProductsbyIdModelUpdate retorna um objeto com: "id, name, quantity"', async () => {
        const id = 1;
        const name = 'Martelo de Thor';
        const quantity = 20;
        const updateProductById = await getProductsbyIdModelUpdate(name, quantity);
        console.log(updateProductById);
        expect(updateProductById).to.be.includes.all.keys(
            'name',
            'quantity',
            'id',
        );
    });
});