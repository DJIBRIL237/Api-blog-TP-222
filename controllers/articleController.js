const Article = require('../models/Article');

// Ajout article
exports.createArticle = async (req, res) => {
    try{
        const article = new Article ({
            titre : req.body.titre,
            contenu: req.body.contenu,
            auteur: req.body.auteur,
            categorie: req.body.categorie,
            tags: req.body.tags
        });

        const savedArticle = await article.save();

        res.status(201).json({
            message: "Article créé avec succès",
            articleId : savedArticle._id,
            article: savedArticle
        });
    }catch (error){
        res.status(400).json({message: error.message });
    }
};

// Afficher des articles 
exports.getAllArticles = async (req, res)=> {
    try{
        const articles = await Article.find();
        res.status(200).json(articles);
    }catch (error){
        res.status(500).json({message: error.message})
    }
};

exports.getOneArticle = async (req, res)=> {
    try{
        const article = await Article.findById(req.params.id);
        if(!article){
            return res.status(404).json({message: "Article non trouvé"})
        }
        res.status(200).json(article);
    }catch (error) {
        if(error.kind === 'ObjectId'){
            return res.status(404).json({message: "Article non trouvé(format d'ID invalide)"})
        }

        res.status(500).json({message: error.message});
        // res.status(500).json({message: error.message});
    }
};

//Modifier article

exports.updateArticle = async (req , res) =>{
    try{
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            {...req.body},
            {new : true}
        );
        res.statues(200).json({message: "Article modifié !",updateArticle});
    }catch (error){
        res.status(400).json({message: error.message});
    }
};

// Supprimer un article
exports.deleteArticle = async (req, res ) =>{
    try{
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).json({message :"Article supprimé avec succès"});
    } catch(error){
        res.status(500).json({message:  error.message})
    }
};

// Rechercher Article

exports.searchArticles = async (req, res) =>{
    try{
        const query = req.query.query;
        const articles = await Article.find({
            $or: [
                {titre: { $regex: query, $options: 'i'}},
                { contenu: {$regex: query, $options: 'i'}}
            ]
        });
        res.status(200).json(articles);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};