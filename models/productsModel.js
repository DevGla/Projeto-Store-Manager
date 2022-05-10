const connection = require('./connection');

const allProductsModel = async () => {
    const [all] = await connection.execute('SELECT * FROM products;');
    return all;
};

const getProductsbyIdModel = async (id) => {
    const [products] = await connection
    .execute('SELECT id, name, quantity FROM products WHERE id= ?;', [id]);
    if (products.length === 0) return null;
    return products[0];
};

module.exports = {
    allProductsModel,
    getProductsbyIdModel,
};
