const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Ingresaron a la app");
  res.send("Acabas de entrar a mi app");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ingresaste:  ${id}`);
  if (parseInt(id)) {
    console.log("Ingresaron: " + id);
  }
});

module.exports = router;
