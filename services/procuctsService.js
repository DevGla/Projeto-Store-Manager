const {
    createProductByName,
    getProductsbyIdModelUpdate,
    deleteProductModel } = require('../models/productsModel');

const createProduct = async (name, quantity) => {
    const createProductBD = await createProductByName(name, quantity);
    return createProductBD;
};

const UpdateProductService = async (name, quantity, id) => {
    const productToUpdate = await getProductsbyIdModelUpdate(name, quantity, id);
    console.log(productToUpdate);
    return productToUpdate;
};

const deleteService = async (id) => {
    const resultDeleteService = await deleteProductModel(id);
    return resultDeleteService;
};

module.exports = {
    createProduct,
    UpdateProductService,
    deleteService,
};