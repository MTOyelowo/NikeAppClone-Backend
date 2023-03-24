const { ObjectId } = require("mongodb");
const db = require("./dbConnect");

const getAllProducts = async () => {
  const products = await db.products.find().toArray();
  return products;
};

const getProduct = async (id) => {
  const product = await db.products.findOne({ _id: new ObjectId(id) });
  return product;
};

module.exports = {
  getAllProducts,
  getProduct,
};
