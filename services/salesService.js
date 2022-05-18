const salesModel = require('../models/salesModel');

const getAllSalesService = async () => {
  const retornoModel = await salesModel.getAllSalesModel();
  return retornoModel;
};
const createPostService = async (array) => {
    const postSales = await salesModel.createSale(array);
    return postSales;
};

const getSalesbyIdService = async (id) => {
    const salesById = await salesModel.getSalesbyId(id);
    return salesById;
};

const upSalesService = async (array, id) => {
    const updateSales = await salesModel.updateSalesModel(array, id);
    return updateSales; 
};

const salesDelete = async (id) => {
    const salesDeletes = await salesModel.deleteSales(id);
    return salesDeletes;
};

module.exports = {
    createPostService,
    upSalesService,
    salesDelete,
    getSalesbyIdService,
    getAllSalesService,
};