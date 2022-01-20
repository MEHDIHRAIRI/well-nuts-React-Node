const connection = require("./DataBase");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const ProductRouter = require("./routes/product");
const CategoryRouter = require("./routes/Category");

connection();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}.`));
