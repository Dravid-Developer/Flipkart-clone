import { products } from "./constants/data.js";
import Product from "./models/product.schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("product exported");
  } catch (error) {
    console.log("Error while listening default data", error.message);
  }
};
export default DefaultData;
