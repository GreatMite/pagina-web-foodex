const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [
  { usuario: "cliente", password: "1234", rol: "usuario" },
  { usuario: "restaurante", password: "1234", rol: "restaurante" },
  { usuario: "admin", password: "1234", rol: "administrador" }
];

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  const cuenta = usuarios.find((item) => {
    return item.usuario === usuario && item.password === password;
  });

  if (!cuenta) {
    return res.status(401).json({
      ok: false,
      mensaje: "Usuario o contraseña incorrectos"
    });
  }

  res.json({
    ok: true,
    rol: cuenta.rol
  });
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});