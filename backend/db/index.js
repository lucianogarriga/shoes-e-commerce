// Variables de Entorno en nuestro archivo dotenv
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

// Puerto 3001 para API desde .env
const PORT = process.env.PORT;
// Creamos un Servidor ejecutando Express
const app = express();

// Middleware Global
// app.use(express.json());

let products = [
  {
    id: 1,
    name: "Nike Air Force 1 Low Retro",
    price: 54000,
    stock: 3,
    category: "zapatillas",
    pictureUrl:
      "https://www.digitalsport.com.ar/files/products/60c75a4fa0d71-559013-500x500.jpg",
  },
  {
    id: 2,
    name: "Adidas Originals Forum Low",
    price: 49500,
    stock: 5,
    category: "zapatillas",
    pictureUrl:
      "https://celadasa.vtexassets.com/arquivos/ids/206531-800-auto?v=637847632407130000&width=800&height=auto&aspect=true",
  },
];

// Definición de ENDPOINTS
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(
  PORT,
  console.log(`Server running on port http://localhost:${PORT}`)
);
