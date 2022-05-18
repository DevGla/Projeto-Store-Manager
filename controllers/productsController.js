const productService = require('../services/procuctsService');
const { createPostService, upSalesService } = require('../services/salesService');

const getAllProductsController = async (_req, res) => {
    const allProducts = await productService.getAllProductsService();
    return res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const productsById = await productService.getProductByIdService(id);
    if (!productsById) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(productsById);
};

const postProduct = async (req, res, _next) => {
    try {
      const { name, quantity } = req.body;
  
      const newProduct = await productService.postProductService(name, quantity);
  
      return res.status(201).json(newProduct);
    } catch (err) {
      console.log(err);
      console.log('create user:', err.message);
    }
  };

const updateProduct = async (req, res, _next) => {
  try {
    const { name, quantity } = req.body;
    const { id } = req.params;

    const update = await productService.UpdateProductService(name, quantity, id);

    return res.status(200).json(update);
  } catch (err) {
    console.log(err);
    console.log('update user:', err.message);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
  const { id } = req.params;

  const resultDelete = await productService.deleteService(id);

  if (resultDelete) return res.status(204).end();
} catch (err) {
  console.log(err);
  console.log('delete user:', err.message);
  next(err);
}
};

const postSales = async (req, res) => {
  const reqArray = req.body;
  const postSalesReturn = await createPostService(reqArray);
  return res.status(201).json(postSalesReturn);
};

const updateSales = async (req, res) => {
  const reqArray = req.body;
  const { id } = req.params;
  const upDateSales = await upSalesService(reqArray, id);
  return res.status(200).json(upDateSales);
};

module.exports = {
  getAllProductsController,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
    postSales,
    updateSales,
};