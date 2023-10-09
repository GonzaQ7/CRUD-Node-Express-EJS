const express = require("express");
const { json } = require("express/lib/response");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express(json));
app.use("/", require("./router"));

app.listen(8080, () => console.log("Server on in port 8080"));
