const { getProductsbyNameModel, getProductsbyIdModel } = require('../models/productsModel');

const productExist = async (req, res, next) => {
    const { name } = req.body; 
    const retornBD = await getProductsbyNameModel(name);
    if (retornBD) res.status(409).json({ message: 'Product already exists' });
    next();
};

const productExistUpdate = async (req, res, next) => {
    const { id } = req.params; 
    const retornBDUpdate = await getProductsbyIdModel(id);
    if (!retornBDUpdate) res.status(404).json({ message: 'Product not found' });
    next();
};

module.exports = {
    productExist,
    productExistUpdate,
};