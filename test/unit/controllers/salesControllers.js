const sinon = require('sinon');
const { expect } = require('chai');
const service = require('../../../services/salesService');
//createPostService upSalesService salesDelete
const controller = require('../../../controllers/salesController');
const req = require('express/lib/request');
//getAllSales getAllSalesById salesDeleteController

describe('Requisito 1 - salesController' , () => {
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

      it('Quando a função getAllSales é chamada o status com o código 200', async () => {
        await controller.getAllSales(request, response);        
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
});

describe('Requisito 1 - salesController', () => {
    const response = {};
    const request = {};
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.params = {
        id: 1,
      }
      sinon.stub(service, 'getSalesbyIdService').resolves([]);
      });
  
      after(() => {
        service.getSalesbyIdService.restore();
      });
  
      it('Quando a função getAllSalesById é chamada o status com o código 200', async () => {
        await controller.getAllSalesById(request, response);   
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      it('Quando a função getAllSalesById é chamada o retorno é o metodo json contendo um Array', async () => {
        await controller.getAllSalesById(request, response);
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      })
  });