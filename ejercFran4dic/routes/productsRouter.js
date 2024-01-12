const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsControllers")
/* GET users listing. */
router.get("/products", productsController.productsList);
router.get("/products/:id/detail", productsController.productDetail);


module.exports = router;
