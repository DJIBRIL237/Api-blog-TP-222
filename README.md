# API Blog - INF222 Backend (Programmation Web) 

Ce projet consiste en le développement d'une API backend pour la gestion d'un blog simple, réalisée dans le cadre du **TAF 1**. L'objectif est de structurer l'apprentissage du développement web via la plateforme **CleeRoute**

##  Gestion des Branches
Le dépôt est organisé pour séparer strictement l'environnement de développement de l'environnement de production :
* **`master`** : Version de développement local. Elle est configurée pour fonctionner sur votre machine.
* **`deploy`** : Version de production. C'est la branche connectée à **Railway** pour le déploiement en ligne.

---

## Technologies utilisées 
* **Runtime** : Node.js (Express)
* **Base de données** : MongoDB Atlas (Cloud)
* **Documentation** : Swagger UI 

---

##  Installation et Lancement (Local - Branche master)

1.  **Cloner le projet** :
    ```bash
    git clone git@github.com:DJIBRIL237/Api-blog-TP-222.git
    git checkout master
    ```
2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
3.  **Variables d'environnement** :
    Créez un fichier `.env` à la racine et ajoutez votre chaîne de connexion MongoDB :
    ```env
    MONGODB_URI=${{ MongoDB.MONGO_URL }}
    PORT=3000
    ```
4.  **Démarrer le serveur** :
    ```bash
    npm start
    ```

---

##  Documentation de l'API (Endpoints) 

Chaque article géré par l'API contient : titre, contenu, auteur, date, catégorie et tags].

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/articles` | Créer un article et renvoyer son ID |
| **GET** | `/api/articles` | Récupérer la liste complète ou filtrée |
| **GET** | `/api/articles/{id}` | Récupérer un article spécifique via son ID  |
| **PUT** | `/api/articles/{id}` | Modifier le titre, contenu, catégorie ou tags  |
| **DELETE** | `/api/articles/{id}` | Supprimer un article via son ID  |
| **GET** | `/api/articles/search` | Recherche par texte dans le titre ou le contenu  |

### Codes de statut HTTP 
* **200 OK** : Succès de la requête.
* **201 Created** : Création réussie.
* **400 Bad Request** : Requête mal formée ou données manquantes.
* **404 Not Found** : L'article demandé n'existe pas.
* **500 Internal Server Error** : Erreur serveur.

---

## Déploiement (Branche deploy) 
L'API est déployée et accessible publiquement.
* **URL de l'API** : api-blog-tp-222-production.up.railway.app
* Documentation Swagger** : `api-blog-tp-222-production.up.railway.app/api-docs` 

---

##  Auteur 
* **Nom** : EMABOU DJIBRIL
 
