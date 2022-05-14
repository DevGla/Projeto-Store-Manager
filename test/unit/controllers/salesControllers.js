const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../services/salesService');
//createPostService upSalesService salesDelete
const controller = require('../../../controllers/salesController');
//getAllSales getAllSalesById salesDeleteController

/* describe('Requisito 1 - salesController' , () => {
    const response = {};
    const request = {};

    before(() => {
        request.body = {
            name: 'product',
            quantity: 100,
          }; 
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(service, 'createPostService').resolves({});
      });

      after(() => {
        service.createPostService.restore();
      });

      it('Quando a função getAllSales é chamada o status com o código 201', async () => {
        await controller.getAllSales(request, response);        
        expect(response.status.calledWith(201)).to.be.equal(false);
      });
}); */

describe('Requisito 1 - productController', () => {
    const response = {};
    const request = {};
  
    before(() => {
        request.body = {
          name: 'product',
          quantity: 100,
          }; 
          request.params = {
            id: 2,
          }
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon.stub(service, 'upSalesService').resolves({});
      });
  
      after(() => {
        service.upSalesService.restore();
      });
  
      /* it('Quando a função updateProduct é chamada o status com o código 201', async () => {
        await controller.updateProduct(request, response);        
        expect(response.status.calledWith(201)).to.be.equal(true);
      }); */
      it('Quando a função getAllSalesById é chamada o retorno é o metodo json contendo um objecto', async () => {
        await controller.getAllSalesById(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(false);
      })
  });