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

module.exports = {
    validateProduct,
    validadeQuantitySales,
};