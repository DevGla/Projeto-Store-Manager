const { createSale, updateSalesModel, deleteSales, getSalesbyId } = require('../models/salesModel');

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
};