const validateProduct = (req, res, next) => {
    console.log(req.body);
    const { productId } = req.body;
    console.log(productId);
    if (productId === undefined) return res.status(400).json({ message: 'é nois que tá' });  
    next();
};

const validadeQuantitySales = (req, res, next) => {
 const { quantity } = req.body;
 if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
 next();
};

const postSales = (req, res) => {
    console.log(req.body);
    res.status(200).json({});
};

module.exports = {
    validateProduct,
    validadeQuantitySales,
    postSales,
};