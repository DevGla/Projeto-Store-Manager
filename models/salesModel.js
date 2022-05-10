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

module.exports = {
    allSales,
    getSalesbyId,
};
