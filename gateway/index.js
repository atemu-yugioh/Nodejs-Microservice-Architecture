const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());

app.use("/customer", proxy("http://localhost:8001"));
app.use("/shopping", proxy("http://localhost:8003"));
app.use("/", proxy("http://localhost:8002"));

app.listen(8000, () => {
  console.log("Customer is listening on Port::8000");
});
