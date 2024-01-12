const path = require("path");
const controller = {
    home: (req,res)=>{
        res.render('main')
    },
}


module.exports = controller;