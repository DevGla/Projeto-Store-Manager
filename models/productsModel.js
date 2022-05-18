const connection = require('./connection');

const getAllProductsModel = async () => {
    const [all] = await connection.execute('SELECT * FROM products;');
    return all;
};

const getProductByIdModel = async (id) => {
    const [products] = await connection
    .execute('SELECT id, name, quantity FROM products WHERE id= ?;', [id]);
    if (products.length === 0) return null;
    return products[0];
};

const postProductModel = async (name, quantity) => {
    const [productBD] = await connection
    .execute('INSERT INTO products (name, quantity) VALUES (?, ?)', [name, quantity]);
    const product = {
        id: productBD.insertId,
        name,
        quantity,
    };
    return product;
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

const deleteProductModel = async (id) => {
    const [result] = await connection
    .execute('DELETE products FROM products WHERE id=?;', [id]);
    return result;
};

module.exports = {
    getAllProductsModel,
    getProductByIdModel,
     getProductsbyNameModel,
     postProductModel,
    getProductsbyIdModelUpdate,
    deleteProductModel,
};
