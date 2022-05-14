const sinon = require('sinon');
const { expect } = require('chai');

const service = require('../../../services/procuctsService');
const controller = require('../../../controllers/productsController');
describe('Requisito 1 - productController', () => {
    const response = {};
    const request = {};

    before(() => {
        request.body = {
            name: 'product',
            quantity: 100,
          }; 
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(service, 'createProduct').resolves({});
      });

      after(() => {
        service.createProduct.restore();
      });

      it('Quando a função createProductBd é chamada o status com o código 201', async () => {
        await controller.createProductBd(request, response);        
        expect(response.status.calledWith(201)).to.be.equal(true);
      });
      it('Quando a função createProductBd é chamada o retorno é o metodo json contendo um objecto', async () => {
        await controller.createProductBd(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      })
});

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

      sinon.stub(service, 'UpdateProductService').resolves({});
    });

    after(() => {
      service.UpdateProductService.restore();
    });

    /* it('Quando a função updateProduct é chamada o status com o código 201', async () => {
      await controller.updateProduct(request, response);        
      expect(response.status.calledWith(201)).to.be.equal(true);
    }); */
    it('Quando a função updateProduct é chamada o retorno é o metodo json contendo um objecto', async () => {
      await controller.updateProduct(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
});
