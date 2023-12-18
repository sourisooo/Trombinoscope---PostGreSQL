const { response } = require("express");
const datamapper = require("../models/datamapper");
let logoutcomplete = "";

const userController = {



    async renderloginpage (req, res, next){


        res.render("login");


    },


    async login(req, res, next){


        user = {name:req.body.name, password:req.body.password};

        
        req.session.userl = await datamapper.checkuser(user);

        res.locals.userl = req.session.userl;

            console.log(  req.session.userl, req.session.userl==undefined);


            res.render("index");



    },


    async logout(req,res,next){


        console.log(res.locals.user)

        res.locals.userl = undefined;

        console.log(res.locals.userl)

        logoutcomplete = "log out complete!";

        res.render("index", {logoutcomplete});









    }



}


module.exports=userController;