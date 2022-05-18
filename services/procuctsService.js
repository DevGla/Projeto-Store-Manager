const productsModel = require('../models/productsModel');

const getAllProductsService = async () => {
    const allService = await productsModel.getAllProductsModel();
    return allService;
};

const getProductByIdService = async (id) => {
    const productsbyIdModel = await productsModel.getProductByIdModel(id);
    return productsbyIdModel;
};

const postProductService = async (name, quantity) => {
    const createProductBD = await productsModel.postProductModel(name, quantity);
    return createProductBD;
};

const UpdateProductService = async (name, quantity, id) => {
    const productToUpdate = await productsModel.getProductsbyIdModelUpdate(name, quantity, id);
    return productToUpdate;
};

const deleteService = async (id) => {
    const resultDeleteService = await productsModel.deleteProductModel(id);
    return resultDeleteService;
};

module.exports = {
    postProductService,
    UpdateProductService,
    deleteService,
    getAllProductsService,
    getProductByIdService,
};