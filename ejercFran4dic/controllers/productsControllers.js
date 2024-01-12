const path = require('path');
const modelo = require('../models/productsModels');
const router = require('../routes/productsRouter');

const controller = {
    productsList: (req, res) => {
        const products = modelo.findAll();
        res.render("productsList", {products})
    }, 
    productDetail: (req, res) => {
        const productId = req.params.id
        const selectedProduct = modelo.findById(productId);
        res.render("detailProducts", {products:selectedProduct})
    }
}

module.exports = controller