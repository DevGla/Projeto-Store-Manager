const salesModel = require('../models/salesModel');

const validateProduct = (req, res, next) => {
    const { productId } = req.body;
    if (productId === undefined) {
        return res.status(400).json({ message: '"productId" is required' });
}  
    next();
};

const validadeQuantitySales = (req, res, next) => {
 const { quantity } = req.body;
 if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
 next();
};

const salesExistDelete = async (req, res, next) => {
    const { id } = req.params; 
    const retornBDSales = await salesModel.getSales(id);
    if (retornBDSales.length === 0) res.status(404).json({ message: 'Sale not found' });
    next();
};

module.exports = {
    validateProduct,
    validadeQuantitySales,
    salesExistDelete,
};