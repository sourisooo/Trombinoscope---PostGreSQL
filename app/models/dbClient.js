const { Client } = require("pg");

/// connexion à ma bdd
// le client me permet d'envoyer des requêtes
// le format de la chaine de connexion est le suivant :
// postgresql://utilisateur:password@server/bdd
const client = new Client('postgresql://postgres:random@localhost/mytrombydb');

// je lance la connexion
client.connect();

// le client est le tunnel d'accès à la BDD
module.exports = client;