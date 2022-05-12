const { createSale, updateSalesModel } = require('../models/salesModel');

const createPostService = async (array) => {
    const postSales = await createSale(array);
    return postSales;
};

const upSalesService = async (array, id) => {
    const updateSales = await updateSalesModel(array, id);
    return updateSales; 
};

module.exports = {
    createPostService,
    upSalesService,
};