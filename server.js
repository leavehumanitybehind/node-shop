//core modules http(launch a server, send request), https (launch a ssl serer), fs, path,os
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errRouter = require("./routes/404");
const cartRouter = require('./routes/cart');

const db = require('./utils/database');

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

db.execute('SELECT * FROM products').then((result) => {
console.log(result[0], result[1])
}).catch((err) => {
console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // for styles and another

app.use("/admin", adminRoutes);
app.use(shopRouter);
app.use(cartRouter);
app.use(errRouter);

app.listen(3000);
