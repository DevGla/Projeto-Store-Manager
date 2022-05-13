const connection = require('./connection');

const allProductsModel = async () => {
    const [all] = await connection.execute('SELECT * FROM products;');
    console.log('desgraça');
    return all;
};

const getProductsbyIdModel = async (id) => {
    const [products] = await connection
    .execute('SELECT id, name, quantity FROM products WHERE id= ?;', [id]);
    if (products.length === 0) return null;
    console.log('caralho');
    return products[0];
};

const getProductsbyIdModelUpdate = async (name, quantity, id) => {
    const [products] = await connection
    .execute('UPDATE products SET name=?, quantity=? WHERE id=?;', [name, quantity, id]);
    if (products.length === 0) return null;
    const returnUpdate = {
        id,
        name,
        quantity,
    };
    return returnUpdate;
};

const getProductsbyNameModel = async (names) => {
    const [name] = await connection
    .execute('SELECT id, name, quantity FROM products WHERE name= ?;', [names]);
    return name[0];
};

const createProductByName = async (name, quantity) => {
    const [productBD] = await connection
    .execute('INSERT INTO products (name, quantity) VALUES (?, ?)', [name, quantity]);
    const product = {
        id: productBD.insertId,
        name,
        quantity,
    };
    return product;
};

const deleteProductModel = async (id) => {
    const [result] = await connection
    .execute('DELETE products FROM products WHERE id=?;', [id]);
    return result;
};

module.exports = {
    allProductsModel,
    getProductsbyIdModel,
    getProductsbyNameModel,
    createProductByName,
    getProductsbyIdModelUpdate,
    deleteProductModel,
};
