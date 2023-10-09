const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/", require("./router"));

app.listen(8080, () => console.log("Server on in port 8080"));
