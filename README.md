﻿# Finance API

This is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Features

- Add new income and expense transactions.
- Retrieve all transactions or filter by category and date.
- Get a summary of total income, total expenses, and balance.
- Optional user authentication (if implemented).

## Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, dotenv

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A running MongoDB instance or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Clone the Repository

git clone https://github.com/your-username/finance-api.git
cd finance-api

### Install Dependencies

npm install

### Configure Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=<Your MongoDB connection string>
PORT=5000

### run the server

npm start

### API Endpoints

1. Create a Transaction
   URL: POST /transactions
   Description: Adds a new income or expense transaction.
![image](https://github.com/user-attachments/assets/72bea76d-4550-47eb-8b53-c369a624d404)

2. Get All Transactions
   URL: GET /transactions
   Description: Retrieves all transactions.

3. Get a Transaction by ID
   URL: GET /transactions/:id
   Description: Retrieves a specific transaction by ID.

4. Update a Transaction
   URL: PUT /transactions/:id
   Description: Updates a transaction by ID.

5. Delete a Transaction
   URL: DELETE /transactions/:id
   Description: Deletes a specific transaction by ID.

6. Get Transaction Summary
   URL: GET /summary
   Description: Retrieves a summary of total income, total expenses, and balance.
