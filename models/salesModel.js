const connection = require('./connection');

const allSales = async () => {
    const [sales] = await connection
    .execute(`SELECT sale_id AS saleId, date ,product_id AS productId, quantity 
    FROM StoreManager.sales
    INNER JOIN sales_products
    ON sales.id=sales_products.sale_id;`);
    return sales;
};

const getSalesbyId = async (id) => {
    const [sales] = await connection
    .execute(`SELECT date ,product_id AS productId, quantity FROM StoreManager.sales
    INNER JOIN sales_products
    ON sales.id=sales_products.sale_id WHERE id=?;`, [id]);
    if (sales.length === 0) return null;
    return sales;
};

const createSale = async (array) => {
    const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES(NOW())');
    await array.forEach((objArrays) => {
        connection
        .execute(`INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
        VALUES (?,?,?);`, [insertId, objArrays.productId, objArrays.quantity]);
    });

    return {
        id: insertId,
        itemsSold: array,
    };
};

const updateSalesModel = async (array, saleId) => {
    await array.forEach((sales) => connection
    .execute('UPDATE sales_products SET quantity=? WHERE product_id=?;', [sales.quantity, saleId]));
    return {
        saleId,
        itemUpdated: array,
    };
};

module.exports = {
    allSales,
    getSalesbyId,
    createSale,
    updateSalesModel,
};
