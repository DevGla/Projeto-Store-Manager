const {
    allProductsModel, getProductsbyIdModel } = require('../models/productsModel');
const { createProduct } = require('../services/procuctsService');

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

const createProductBd = async (req, res, next) => {
    try {
      const { name, quantity } = req.body;
  
      const newUser = await createProduct(name, quantity);
  
      return res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      console.log('create user:', err.message);
      next(err);
    }
  };

module.exports = {
    getAllProducts,
    getAllProductsbyId,
    createProductBd,
};