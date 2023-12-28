# Guide to Run App

```bash
npm install
npm start
```

# Guide to Inserting Data into MongoDB

This guide provides instructions on how to insert data into MongoDB using the `insertData.js` script with Node.js and Mongoose.
Ensure you have MongoDB running on your local system with port "27017" before you proceed.

## File Structure

-   **Script**: `src/utils/insertData.js`
-   **Data**: `assets/fake-data.js`

## Prerequisites

-   Node.js installed.
-   MongoDB running locally.
-   Mongoose npm package installed.

## Steps to Insert Data

### 1. Prepare

First, you need to install package by below command.

```bash
npm ci
```

※ Sample data is properly formatted in `assets/fake-data.js`.

### 2. Running the Script

Navigate to the root directory and run the script using Node.js.

```bash
node src/ultils/insertData.js
```

### 3. Verify Insertion

After running the script, check your MongoDB database to ensure that the data has been inserted successfully into the products collection.
