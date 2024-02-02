const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");

app.use(cors());

app.listen(PORT, () => {
  console.log(`servidor abierto en el puerto ${PORT}`);
});