const { createSale, updateSalesModel, deleteSales } = require('../models/salesModel');

const createPostService = async (array) => {
    const postSales = await createSale(array);
    return postSales;
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
};