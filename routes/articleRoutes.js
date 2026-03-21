const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Identifiant unique de l'article
 *         titre:
 *           type: string
 *           description: Titre de l'article
 *         contenu:
 *           type: string
 *           description: Contenu de l'article
 *         auteur:
 *           type: string
 *           description: Auteur de l'article
 *         categorie:
 *           type: string
 *           description: Catégorie de l'article
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associés
 *         date:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *       required:
 *         - titre
 *         - contenu
 *         - auteur
 *         - categorie
 *         - tags
 *     ArticleInput:
 *       type: object
 *       properties:
 *         titre:
 *           type: string
 *         contenu:
 *           type: string
 *         auteur:
 *           type: string
 *         categorie:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *       required:
 *         - titre
 *         - contenu
 *         - auteur
 *         - categorie
 *         - tags
 *
 * /api/articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         description: Liste des articles récupérée
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *
 *   post:
 *     summary: Créer un nouvel article
 *     tags:
 *       - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       201:
 *         description: Article créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       400:
 *         description: Requête invalide
 *
 * /api/articles/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Identifiant MongoDB de l'article
 *
 *   get:
 *     summary: Récupérer un article par ID
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         description: Article trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Mettre à jour un article existant
 *     tags:
 *       - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       200:
 *         description: Article mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprimer un article
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         description: Article supprimé
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get("/articles", articleController.getAllArticles);
router.post("/articles", articleController.createArticle);
router.get("/articles/:id", articleController.getOneArticle);
router.put("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);
// Exemple : recherche par querystring, requis dans controller pour renvoyer un résultat
router.get("/articles/search", articleController.searchArticles);

module.exports = router;
