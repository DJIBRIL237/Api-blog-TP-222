const mongoose = require ("mongoose");

const articleSchema = mongoose.Schema({
    titre :{
        type : String,
        required: [true, "le titre est obligatoire"]
    },

    contenu: {
        type: String,
        required: true
    },

    auteur: {
        type: String,
        required: [true, "L'auteur est obligatire"]
    },

    date :{
        type : Date,
        default : Date.now
    },

    categorie:{
        type : String,
        required:true
    },

    tags:{
        type:[String],
        required: true

    }
});

module.exports = mongoose.model('Article', articleSchema);