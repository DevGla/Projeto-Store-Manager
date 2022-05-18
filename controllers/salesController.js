const { allSales } = require('../models/salesModel');
const { salesDelete, getSalesbyIdService } = require('../services/salesService');

const getAllSales = async (_req, res) => {
    const sales = await allSales();
    return res.status(200).json(sales);
};
const getAllSalesById = async (req, res) => {
    const { id } = req.params;
    const salesId = await getSalesbyIdService(id);
    if (!salesId) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(salesId); 
};

const salesDeleteController = async (req, res) => {
    const { id } = req.params;
    await salesDelete(id);
    return res.status(204).end();
};

module.exports = { 
    getAllSales,
    getAllSalesById,
    salesDeleteController,
};