const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('Camada Controller - sales', () => {
    describe('Função getAllSalesController', () => {
        const response = {};
        const request = {};
    
        before(() => { 
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
    
            sinon.stub(salesService, 'getAllSalesService').resolves({});
          });
    
          after(() => {
            salesService.getAllSalesService.restore();
          });
    
          it('Quando a função getAllSalesController é chamada o status com o código 200', async () => {
            await salesController.getAllSalesController(request, response);        
            expect(response.status.calledWith(200)).to.be.equal(true);
          });
    })
})
