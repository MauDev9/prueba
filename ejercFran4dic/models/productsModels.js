const path = require('path');
const fs = require('fs');
const modelo = {
    findAll: () => {
        const jsonData = fs.readFileSync(
            path.join(__dirname, "../json/products.json")
        );
        const products = JSON.parse(jsonData);
        return products;
    },
    findById: (id)=>{
        const product = modelo.findAll()
        const selectedProduct = product.find(product => product.id == id)
        return selectedProduct;
    }
}


module.exports = modelo;