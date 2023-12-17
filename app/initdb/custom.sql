-- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
-- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga
-- Mettre à jour la promo 5 pour la renommer "Cleo"
-- Supprimer la promo 123

INSERT INTO student (first_name, last_name, promo_id)
VALUES ('Chuck', 'Norris', 5);

-- SELECT * from student WHERE first_name = 'Chuck' AND last_name= 'Norris';

INSERT INTO promo (id, name, github_organization)
VALUES (100000,'César', 'Néant');

SELECT * from promo WHERE name = 'César';

UPDATE promo SET name = 'Cleo' WHERE id = 5;

SELECT * from promo WHERE name = 'Cleo';