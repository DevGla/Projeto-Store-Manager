const { allSales, getSalesbyId } = require('../models/salesModel');

const getAllSales = async (_req, res) => {
    const sales = await allSales();
    return res.status(200).json(sales);
};

const getAllSalesById = async (req, res) => {
    const { id } = req.params;
    const salesId = await getSalesbyId(id);
    if (!salesId) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(salesId); 
};

module.exports = { 
    getAllSales,
    getAllSalesById,
};