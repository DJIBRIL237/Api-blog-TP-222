const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Port = 3000;
app.use(express.json());

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog INF222",
      version: "1.0.0",
      description: "Documentation",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./routes/articleRoutes.js"],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const articleRoutes = require("./routes/articleRoutes");

app.use("/api", articleRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then(() => console.log("connexion a Mongo reussie"))
  .catch((err) => console.error("Ereur de connexion a Mongodb :", err));

app.get("/", (req, res) => {
  res.send("Bienvenue sur L\'Api du blog");
});

app.listen(Port, () => {
  console.log(`le serveur a demarre sur http://localhost:${Port}`);
});
