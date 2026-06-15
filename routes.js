const express = require("express");
const router = express.Router();
const productos = require("./data");

router.get("/productos", (req, res) => {
  res.json(productos);
});

router.get("/productos/:id", (req, res) => {
  const idBuscar = parseInt(req.params.id);
  const productoEncontrado = productos.find(p => p.id === idBuscar);

  if (!productoEncontrado) {
    return res.status(404).json({ error: "producto no encontrado" });
  }

  res.json(productoEncontrado);
});

router.post("/productos", (req, res) => {
  const { nombre, precio, categoria } = req.body;

  if (!nombre || precio === undefined || !categoria) {
    return res.status(400).json({ error: "todos los campos son obligatorios" });
  }

  if (typeof precio !== "number") {
    return res.status(400).json({ error: "el precio debe ser un numero" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    categoria
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

router.put("/productos/:id", (req, res) => {
  const idBuscar = parseInt(req.params.id);
  const productoEncontrado = productos.find(p => p.id === idBuscar);

  if (!productoEncontrado) {
    return res.status(404).json({ error: "producto no encontrado" });
  }

  const { nombre, precio, categoria } = req.body;

  if (!nombre || precio === undefined || !categoria) {
    return res.status(400).json({ error: "todos los campos son obligatorios" });
  }

  if (typeof precio !== "number") {
    return res.status(400).json({ error: "el precio debe ser un numero" });
  }

  productoEncontrado.nombre = nombre;
  productoEncontrado.precio = precio;
  productoEncontrado.categoria = categoria;

  res.json(productoEncontrado);
});

router.delete("/productos/:id", (req, res) => {
  const idBuscar = parseInt(req.params.id);
  const indice = productos.findIndex(p => p.id === idBuscar);

  if (indice === -1) {
    return res.status(404).json({ error: "producto no encontrado" });
  }

  const productoEliminado = productos.splice(indice, 1);
  res.json({ mensaje: "producto eliminado", producto: productoEliminado[0] });
});

module.exports = router;