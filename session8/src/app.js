const path = require("path");
const express = require("express");
const hbs = require("hbs");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "../public");
const viewDir = path.join(__dirname, "../template/views");
const partialDir = path.join(__dirname, "../template/partials");
app.use(express.static(publicDir));
app.set("view engine", "hbs");
app.set("views", viewDir);
hbs.registerPartials(partialDir);
app.get("", (req, res) => {
    let ind = req.query.i-1
console.log(ind)
  const url = `https://backtest.achilleseg.com/api/FilterProducts?category=21&lang_id=1&limit=16&page_number=${ind}`;
  data = [];
  request({ url }, (err, response) => {
    d = JSON.parse(response.body);
    data = d.result.products.product_data;
    limitl = Math.ceil(d.result.products.total_record / 16)
    limit=[]
    for(i=1;i<=limitl; i++) limit.push(i)
    data.forEach((element) => {
      element.final =
        element.products_price -
        (element.products_price * element.product_price_discount) / 100;
    });
    res.render("home", { data, limit });
  }),
    (err) => {
      console.log(err);
    };
});
app.get("product/:id", (req, res) => {
  _id = req.params.id;
  const url = `https://backtest.achilleseg.com/api/ProductsUpdated?lang_id=1&page=0&limit=12&product_id=${_id}`;
  data = [];
  request({ url }, (err, response) => {
    try {
      d = JSON.parse(response.body);
      data = d.result.product_data[0];
      data.final = data.products_price - (data.products_price * data.product_price_discount) / 100;
    } catch (e) {
      res.send("404", {
        errMsg: "error",
      });
    }
    res.render("single", { data });
  }),
    (err) => {
      console.log(err);
    };
});
app.get("/products", (req, res) => {
  let pageId = req.query.a;
  console.log(pageId);
  if (!pageId) {
    pageId = 1;
  } else pageId++;
  const url = `https://backtest.achilleseg.com/api/ProductsUpdated?lang_id=1&page=${pageId}&limit=12`;

  console.log(req.query.a);
  data = [];
  request({ url }, (err, response) => {
    d = JSON.parse(response.body);
    data = d.result.product_data;
    res.render("products", { data, pageId });
  }),
    (err) => {
      console.log(err);
    };
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "not found",
  });
});

app.get("/products/*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log("run avaliable on localhost");
});
