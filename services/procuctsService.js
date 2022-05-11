const { createProductByName } = require('../models/productsModel');

const createProduct = async (name, quantity) => {
    const createProductBD = await createProductByName(name, quantity);

    return createProductBD;
};

module.exports = {
    createProduct,
};