const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let allProducts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//app.get("/api/products", (req, res) => {
//res.send(products);
//});

//Conexion Base de Datos
const mongoose = require('mongoose');
const password = 'UWY06mq1D2snnwes';
const dbname = 'AccessoriosWayne';
const user = 'hectorbarajas060401'
const uri = `mongodb+srv://${user}:${password}@accessorioswayne.zy27u.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const ProductModel = require('./dataBase/productos.model.js')
connect = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('conectado a mongodb'))

    .catch(e => console.log('error de conexión', e))
}

connect()
leerBase = async(req, res) => {
    try {
        allProducts = await ProductModel.find()
        app.get("/api/products", (req, res) => {
            res.send(allProducts);
            
        });

    } catch (e) {
        console.log(e)
    }
}
leerBase()
app.post("/api/pay", (req, res) => {}
   





app.use("/", express.static("frontend"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});