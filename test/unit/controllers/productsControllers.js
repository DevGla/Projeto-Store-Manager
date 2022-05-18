const sinon = require('sinon');
const { expect } = require('chai');
const service = require('../../../services/procuctsService');
const controller = require('../../../controllers/productsController');
// getAllProducts que chama allProductsService - service e retorna um array

describe('Requisito 1 - productController', () => {
    const res = {};
    const req = {};

    before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(service, 'allProductsService').resolves([]);
      });

      after(() => {
        service.allProductsService.restore();
      });

      it('Quando a função getAllProducts é chamada o status com o código 200', async () => {
        await controller.getAllProducts(req, res);  
        expect(res.status.calledWith(200)).to.be.equal(true);  
      });
      it('Quando a função getAllProducts é chamada o retorno é o metodo json contendo um Array', async () => {
        await controller.getAllProducts(req, res);
        expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
      })
});

describe('Requisito 1 - productController', () => {
  const res = {};
  const req = {};

  before(() => {
      req.body = {}; 
        req.params = {
          id: 2,
        }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(service, 'getProductsbyIdService').resolves({id: 1, name: "Martelo de Thor", quantity: 10});
    });

    after(() => {
      service.getProductsbyIdService.restore();
    });

    it('Quando a função getAllProductsbyId é chamada o status com o código 200', async () => {
      await controller.getAllProductsbyId(req, res);        
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('Quando a função getAllProductsbyId é chamada o retorno é o metodo json contendo um objecto', async () => {
      await controller.getAllProductsbyId(req, res);
      expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
});
