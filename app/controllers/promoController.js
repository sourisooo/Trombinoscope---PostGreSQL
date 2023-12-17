// const promoList = require("../../data/promos.json");
const datamapper = require("../models/datamapper");
const promoController = {
    async displayAll(req,res,next){
        // je récupère les promos depuis le datamapper
        const promoList = await datamapper.findAllPromos();

        // Est ce que je récupère bien les promos ?
        if(promoList){
            // je transmets les données à la vue via res.locals
            res.locals.promoList = promoList;

            res.render("promos");
        }
        else{
            res.status(500).render("500");
        }
    },
    async displayOne(req,res,next){


        // req ? c'est la requête, Express enregistre dans l'objet "req" toutes les infos de la requête
        // req.params ?
        // req.params.michel ?
        console.log(req.params);

        // je récupère la promo par son id
        //const promo = promoList.find(promo => promo.id == req.params.michel);
        const promo = await datamapper.findOnePromo(req.params.id);
        console.log("PROMO :",promo);
        // la promo existe-t-elle ?
        if(promo){
            res.locals.promo = promo;
            res.render("promoDetails");
        }
        else{
            // je renvoie la 404
            // res.render("404");

            // je passe au middleware suivant
            next();
        }
        
    },
};

module.exports = promoController;