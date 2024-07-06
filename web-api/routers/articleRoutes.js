const articleController = require("../controllers/articleController");
const authMiddleWare = require("../middleWare/authMiddleware");
const articleRoutes = require("express").Router();

articleRoutes.get("/articles", articleController.findAllArticle);
articleRoutes.post("/articles", authMiddleWare, articleController.createNewArticle);

module.exports = articleRoutes;