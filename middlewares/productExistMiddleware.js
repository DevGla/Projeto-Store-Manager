const { getProductsbyNameModel } = require('../models/productsModel');

const productExist = async (req, res, next) => {
    const { name } = req.body; 
    const retornBD = await getProductsbyNameModel(name);
    if (retornBD) res.status(409).json({ message: 'Product already exists' });
    next();
};

module.exports = {
    productExist,
};