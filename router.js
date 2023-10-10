const express = require("express");
const router = express.Router();
const conexion = require("./database/db");
const crud = require("./controllers/crud");

//Mostrar registros
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index.ejs", { results: results });
    }
  });
});

//Crear registros
router.get("/create", (req, res) => {
  res.render("create.ejs");
});

router.post("/save", crud.save);

//Editar registros
router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("SELECT * FROM users WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("edit.ejs", { user: results[0] });
    }
  });
});

router.post("/update", crud.update);

//Eliminar registro

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
