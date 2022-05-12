const { createSale } = require('../models/salesModel');

const createPostService = async (array) => {
    const postSales = await createSale(array);
    return postSales;
};
module.exports = {
    createPostService,
};