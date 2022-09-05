const express = require("express");
const bodyParser=require('body-parser');
// const mangoPractice=require('./mongo')
const mangoPractice=require('./mongoose')

const app= express();

app.use(bodyParser.json());

app.post('/products',mangoPractice.createProduct);

app.get('/products',mangoPractice.getProducts);

app.listen(3000);