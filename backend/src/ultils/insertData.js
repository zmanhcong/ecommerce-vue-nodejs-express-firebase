const mongoose = require("mongoose");
const products = require("../../assets/fake-data");

// Productモデル
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    description: String,
    imageUrl: String,
    averageRating: String,
});

const Product = mongoose.model("Product", productSchema, "products"); // 'products' is the name of the collection

// Define a schema for users
const userSchema = new mongoose.Schema({
    id: String,
    cartItems: [String],
});

// Create a model for users
const User = mongoose.model("User", userSchema, "users"); // 'users' is the name of the collection

// Kết nối tới MongoDB
mongoose
    .connect("mongodb://localhost:27017/vue-db")
    .then(() => {
        console.log("MongoDB Connected");

        // Insert dữ liệu
        Product.insertMany(products)
            .then(() => {
                console.log("Product data inserted");

                //Insert the user
                const newUser = {
                    id: "12345",
                    cartItems: ["123", "234", "456"],
                };

                User.create(newUser)
                    .then(() => {
                        console.log("User inserted");
                        mongoose.connection.close(); // Close the connection when done
                    })
                    .catch((e) => {
                        console.error("Error inserting user:", e); // Error inserting user
                    });
            })
            .catch((e) => {
                console.error("Error inserting product data", e); // Error inserting products
            });
    })
    .catch((err) => {
        console.error("Could not connect to MongoDB:", err);
    });
