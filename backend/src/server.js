import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";

const app = express();
app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
        });
        const db = client.db("vue-db");
        const products = await db.collection("products").find({}).toArray();
        client.close();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error connecting to db", err });
    }
});

app.get("/api/users/:userId/cart", async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(userId);
        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("vue-db");
        const user = await db.collection("users").findOne({ id: userId });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        const products = await db.collection("products").find({}).toArray();
        const cartItemsIds = user.cartItems;
        const cartItems = cartItemsIds.map((id) =>
            products.find((product) => product.id === id)
        );
        res.status(200).json(cartItems);
        client.close();
    } catch (err) {
        res.status(500).json({ message: "Error connecting to db", err });
    }
});

app.get("/api/products/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
        });
        const db = client.db("vue-db");
        const product = await db.collection("products").findOne({ id: productId });
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
        client.close();
    } catch (err) {
        res.status(500).json({ message: "Error connecting to db", err });
    }
});

app.listen(8001, () => {
    console.log("Server is running on port 8001");
});
