const { allProductsModel, getProductsbyIdModel } = require('../models/productsModel');

const getAllProducts = async (_req, res) => {
    const allProducts = await allProductsModel();
    return res.status(200).json(allProducts);
};

const getAllProductsbyId = async (req, res) => {
    const { id } = req.params;
    const productsById = await getProductsbyIdModel(id);
    if (!productsById) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(productsById);
};

module.exports = {
    getAllProducts,
    getAllProductsbyId,
};