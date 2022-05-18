const salesService = require('../services/salesService');

const getAllSalesController = async (_req, res) => {
    const sales = await salesService.getAllSalesService();
    return res.status(200).json(sales);
};
const getAllSalesById = async (req, res) => {
    const { id } = req.params;
    const salesId = await salesService.getSalesbyIdService(id);
    if (!salesId) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(salesId); 
};

const salesDeleteController = async (req, res) => {
    const { id } = req.params;
    await salesService.salesDelete(id);
    return res.status(204).end();
};

module.exports = { 
    getAllSalesController,
    getAllSalesById,
    salesDeleteController,
};