const {
    createProductByName,
    getProductsbyIdModelUpdate,
    deleteProductModel, 
    allProductsModel, 
    getProductsbyIdModel } = require('../models/productsModel');

const allProductsService = async () => {
    const allService = await allProductsModel();
    return allService;
};

const getProductsbyIdService = async (id) => {
    const productsbyIdModel = await getProductsbyIdModel(id);
    return productsbyIdModel;
};

const createProduct = async (name, quantity) => {
    const createProductBD = await createProductByName(name, quantity);
    return createProductBD;
};

const UpdateProductService = async (name, quantity, id) => {
    const productToUpdate = await getProductsbyIdModelUpdate(name, quantity, id);
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
    allProductsService,
    getProductsbyIdService,
};