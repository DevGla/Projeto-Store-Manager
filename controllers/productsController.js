const {
    allProductsModel, getProductsbyIdModel } = require('../models/productsModel');
const {
  createProduct,
  UpdateProductService,
  deleteService } = require('../services/procuctsService');
const { createPostService } = require('../services/salesService');

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
  
      const newProduct = await createProduct(name, quantity);
  
      return res.status(201).json(newProduct);
    } catch (err) {
      console.log(err);
      console.log('create user:', err.message);
      next(err);
    }
  };

const updateProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const { id } = req.params;

    const update = await UpdateProductService(name, quantity, id);

    return res.status(200).json(update);
  } catch (err) {
    console.log(err);
    console.log('update user:', err.message);
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
  const { id } = req.params;

  const resultDelete = await deleteService(id);

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
  res.status(201).json(postSalesReturn);
};

module.exports = {
    getAllProducts,
    getAllProductsbyId,
    createProductBd,
    updateProduct,
    deleteProduct,
    postSales,
};