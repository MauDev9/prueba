
const express = require('express');
const app = express();
const path = require("path");
const dotenv =  require("dotenv").config();
const port = process.env.PORT || 3001;
const mainRouter = require("./routes/productsRouter");
const productsRouter = require('./routes/productsRouter')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use("/", mainRouter);
app.use("/", productsRouter);

app.listen(port, ()=>{console.log(`El puerto ${port} esta funcionando`)}); 


