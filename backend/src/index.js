/*
  このindex.jsは、ID「123」のmongodbからのGETデータをテストするために使用されます。
*/

const mongoose = require("mongoose");

// MongoDB に接続する
mongoose.connect("mongodb://localhost:27017/vue-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// スキーマ定義
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    description: String,
    imageUrl: String,
    averageRating: String,
});

// モデルの作成
const Product = mongoose.model("Product", productSchema, "products");

// async/awaitを使用してIDで商品を取得する関数
async function getProductById(productId) {
    try {
        const product = await Product.findOne({ id: productId });
        console.log("Retrieved product:", product);
    } catch (err) {
        console.error("Error retrieving product:", err);
    } finally {
        mongoose.connection.close(); // 完了したら接続を閉じます
    }
}

// ID「123」のProductを取得
getProductById("123");
