const {
    createProductByName,
    getProductsbyIdModelUpdate,
    deleteProductModel, 
    getAllProductsModel, 
    getProductByIdModel } = require('../models/productsModel');

const getAllProductsService = async () => {
    const allService = await getAllProductsModel();
    return allService;
};

const getProductByIdService = async (id) => {
    const productsbyIdModel = await getProductByIdModel(id);
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
    getAllProductsService,
    getProductByIdService,
};