const datamapper = require("../models/datamapper");

const studentController = {
    async displayStudents(req,res,next){
        const promoId = req.params.id;

        // je récupère la liste des étudiants
        const studentList = await datamapper.getStudentsByPromoId(promoId);

        if(studentList){
            // je récupère le détail de la promo
            const promo = await datamapper.findOnePromo(promoId);

            // j'envoie la liste des étudiants à la vue
            res.locals.studentList = studentList;
            res.locals.promo = promo;

            // j'affiche la vue
            res.render("students");
        }
        else{
            next();
        }

        
    },

     async displayform(req,res,next){

     


       const promos = await datamapper.findAllPromos();

        res.render("add_student",{promos});


    },


    async addStudent(req,res,next){

        let newstudent = {first_name: req.body.first_name, last_name: req.body.last_name, promo_id: req.body.promo,
        
        github_username: req.body.github_username, profile_picture_url: req.body.picture_url
        
        }

        let promo = req.body.promo;

                // console.log(newstudent,promo);


            datamapper.addstudent(newstudent);

            datamapper.removesdtwithnoprofileimage();


            const promos = await datamapper.findAllPromos();

            res.render("index");

 
     }




};

module.exports = studentController