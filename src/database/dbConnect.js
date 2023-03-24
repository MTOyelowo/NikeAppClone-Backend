const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://oyelowomayowa:012wutangs@cluster0.cwxyjfk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("test");

const products = database.collection("products");
const orders = database.collection("orders");

module.exports = {
  products,
  orders,
};
