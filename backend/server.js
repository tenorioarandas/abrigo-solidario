require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "online" });
});

app.post("/register", async (req, res) => {
  try {
    const { nome, email, senha, tipo_usuario } = req.body;

    if (!nome || !email || !senha || !tipo_usuario) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const result = await db.query(
      `INSERT INTO usuarios 
      (nome,email,senha,tipo_usuario) 
      VALUES ($1,$2,$3,$4)
      RETURNING id,nome,email,tipo_usuario`,
      [nome, email, senhaCriptografada, tipo_usuario],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({
        error: "E-mail já cadastrado",
      });
    }

    res.status(500).json({
      error: err.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        error: "Preencha email e senha",
      });
    }

    const result = await db.query("SELECT * FROM usuarios WHERE email=$1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({
        error: "Credenciais inválidas",
      });
    }

    const usuario = result.rows[0];

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({
        error: "Credenciais inválidas",
      });
    }

    res.json({
      message: "Login realizado",
      user: {
        id: usuario.id,
        nome: usuario.nome,
        tipo_usuario: usuario.tipo_usuario,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
