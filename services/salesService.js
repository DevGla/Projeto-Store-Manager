const { createSale,
    updateSalesModel,
    deleteSales,
    getSalesbyId,
    getAllSalesModel } = require('../models/salesModel');

const getAllSalesService = async () => {
  const retornoModel = await getAllSalesModel();
  return retornoModel;
};
const createPostService = async (array) => {
    const postSales = await createSale(array);
    return postSales;
};

const getSalesbyIdService = async (id) => {
    const salesById = await getSalesbyId(id);
    return salesById;
};

const upSalesService = async (array, id) => {
    const updateSales = await updateSalesModel(array, id);
    return updateSales; 
};

const salesDelete = async (id) => {
    const salesDeletes = await deleteSales(id);
    return salesDeletes;
};

module.exports = {
    createPostService,
    upSalesService,
    salesDelete,
    getSalesbyIdService,
    getAllSalesService,
};