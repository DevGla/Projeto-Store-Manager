const { createProductByName, getProductsbyIdModelUpdate } = require('../models/productsModel');

const createProduct = async (name, quantity) => {
    const createProductBD = await createProductByName(name, quantity);
    return createProductBD;
};

const UpdateProductService = async (name, quantity, id) => {
    const productToUpdate = await getProductsbyIdModelUpdate(name, quantity, id);
    return productToUpdate;
};

module.exports = {
    createProduct,
    UpdateProductService,
};