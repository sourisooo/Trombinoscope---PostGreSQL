const { Router } = require("express");

const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");
const { init } = require("./initdb/initdb");

const router = Router();

router.get("/",mainController.displayHomepage);

router.get("/admin/addStudent",studentController.displayform)

router.post("/admin/addStudent",studentController.addStudent)

router.get("/promos",promoController.displayAll);
router.get("/promo/:id",promoController.displayOne);

router.get("/promo/:id/students",studentController.displayStudents);

// http://localhost:3000/promo/1/2/3/4
// router.get("/promo/:toto/:tata/:tutu/:titi",promoController.displayOne);

// Middleware de gestion de la 404
// je ne gère l'envoi de la 404 qu'à un seul endroit
router.use((req,res)=>{
    res.render("404");
});

module.exports = router;