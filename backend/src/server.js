import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";
const cors = require("cors");

const app = express();

// Enable All CORS Requests
app.use(cors());

app.use(bodyParser.json());

// Get all products
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

// View detail of a product
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

// Get all cart items for a user
app.get("/api/users/:userId/cart", async (req, res) => {
    try {
        const { userId } = req.params;
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

// Add a product to cart
app.post("/api/users/:userId/cart", async (req, res) => {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("vue-db");
        const user = await db.collection("users").findOne({ id: userId });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        const product = await db.collection("products").findOne({ id: productId });
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        await db
            .collection("users")
            .updateOne({ id: userId }, { $push: { cartItems: productId } });
        res.status(200).json({ message: "Product added to cart" });
        client.close();
    } catch (err) {
        res.status(500).json({ message: "Error connecting to db", err });
    }
});

// Remove a product from cart
app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("vue-db");

        // find user in users collection
        const user = await db.collection("users").findOne({ id: userId });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        // find product in products collection
        const product = await db.collection("products").findOne({ id: productId });
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        await db
            .collection("users")
            .updateOne({ id: userId }, { $pull: { cartItems: productId } });
        res.status(200).json({ message: "Product removed from cart" });
        client.close();
    } catch (err) {
        res.status(500).json({ message: "Error connecting to db", err });
    }
});

const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
