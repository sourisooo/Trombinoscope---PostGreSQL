const client = require("./dbClient");

const datamapper = {
    async findAllPromos(){
        // 1. Je prépare la requête SQL
        const sqlQuery = `
        SELECT *
        FROM promo;
        `;

        // 2. J'initialise la variable "result" qui sera retournée par ma méthode
        let result;
        // 3. J'essaie de contacter la BDD pour récupérer la liste des promos
        try{
            // 3.1 J'envoie la requête SQL à la BDD
            const response = await client.query(sqlQuery);
            // 3.2 Je place les lignes retournées (response.rows) dans la variable "result"
            result = response.rows;
            // console.log(result);
        }
        catch(error){
            // J'affiche l'erreur qui est survenue
            console.error(error);
        }

        // 4. Je retourne "result"
        return result;
    },
    async findOnePromo(id){
        const sqlQuery = `
        SELECT *
        FROM promo
        WHERE id=${id};
        `;

        let response;
        try{
            response = await client.query(sqlQuery);
            // response.rows sera toujours un tableau, que la réponse retourne 0, 1 ou N lignes
            //result = response.rows[0];
        }
        catch(error){
            console.error(error);
        }


        // autre façon de faire, l'utilisation du ?
        // response? va vérifier si response est null
        // si response est null alors ça renvoie "undefined"
        // si response contient quelque chose alors il essaie de continuer et d'évaluer response.rows[0]
        return response?.rows[0];
        // if(response){
        //     return response.rows[0]
        // }
        // else{
        //     return null;
        // }
    },
    async getStudentsByPromoId(id){
        const sqlQuery = `
        SELECT *
        FROM student
        WHERE promo_id=${id};
        `;

        console.log(sqlQuery);

        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;
    },

    async addstudent (newstudent){

        const sqlQuery = `

        INSERT INTO student (first_name, last_name, promo_id, github_username, profile_picture_url)
        VALUES ('${newstudent.first_name}', '${newstudent.last_name}', '${newstudent.promo_id}', '${newstudent.github_username}', '${newstudent.profile_picture_url}' )
        RETURNING *;
        `;

    
        try{
            response = await client.query(sqlQuery);

            // console.log(response.rows);

        }
        catch(error){
            console.error("ERROR :",error);
        }


    },


    async removesdtwithnoprofileimage (){

        const sqlQuery = `

        DELETE FROM student WHERE profile_picture_url = '';

        `;

    
        try{
            response = await client.query(sqlQuery);

            console.log(response.rows);

        }
        catch(error){
            console.error("ERROR :",error);
        }

    

    },


    async checkuser(user){


        const sqlQuery = `

        SELECT * FROM login WHERE name = '${user.name}' AND password = '${user.password}'


        `;

        let result;

        try{
            response = await client.query(sqlQuery);

            result= response.rows[0];

            // console.log(response.rows);

        }
        catch(error){
            console.error("ERROR :",error);
        }

        return result;



    }




};

module.exports = datamapper;
