
# Challenges

## Challenge Épisode 1

### Lister les étudiants d'une promo

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.


### Bonus
L'intégration faite par le stagiaire est ... sommaire. N'hésitez pas à la retravailler !

<details>
<summary>Énoncé détaillé</summary>

- La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID. par exemple `/promo/:id/students`
- La méthode associée doit être dans un controller. Soit `promoController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !
- Dans cette méthode il faut :
    - récupérer l'id de la promo ciblée
    - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntaxe).
    - "render" la view, sans oublier de lui transmettre les données !
- Contruire la view en listant les étudiants
- Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".
</details>

## Challenge Épisode 4

### Ajouter un étudiant

Si ce n'est pas déjà fait, ajouter sur la page d'accueil un nouveau lien "Ajouter un étudiant" qui pointe vers l'url `/admin/addStudent`.

#### Étape 1: afficher le formulaire

Implémenter la route `/admin/addStudent` et le traitement dans un nouveau controller `adminController`.  
Une version HTML du formulaire est dipo dans le dossier intégration (`add_student.html`).

#### Étape 2 : Remplir le select

Dans la route qui vient d'être implémentée, inspire toi de ce qui a été fait dans les autres controllers pour remplir le `<select>` du formulaire avec des `<option>` qui représentent les promos. Bien sur, la liste des promos doit venir de la base de données !

<details>
<summary>Un coup de main ?</summary>

- Commence par require `dataMapper` dans le controller `adminController`.
- Il faut ensuite appeller `dataMapper.getAllPromotions`, pour récupérer la liste des promotions !
- N'oublie pas le traitement de l'erreur éventuelle, puis passe la liste des promotions à la view `addStudent`.
- Dans la view `addStudent`, utilise la liste des promos pour créer des `<option>`. Puisque c'est une liste, il faudra une boucle.

</details>

#### Étape 3/Bonus : Traiter le POST

Utilise tout ce que tu connais pour traiter les informations du formulaire et ajouter un étudiant dans la base de données !

Remarque : on a déjà préparé la requete SQL ! cf [doc/sql.md](./doc/sql.md)

<details>
<summary>Un peu d'aide ?</summary>

- Il faut d'abord ajouter le middleware `express.urlencoded({extended: true})` à `app` dans `index.js`. Sinon `req.body` n'existera pas !
- Ensuite, il faut définir une route POST qui va déclencher la méthode `adminController.addStudent`.
- Il faut maintenant coder la méthode `adminController.addStudent` !
  - Ajoute une nouvelle méthode `addStudent(studentInfo)` dans le `dataMapper`. Cette méthode doit lancer une requête "INSERT ..." en utilisant les paramètres passés dans l'objet `studentInfo`. Inspire toi de ce qui a été fait précédement !
  - Dans `adminController.addStudent`, il faut maintenant appeller `dataMapper.addStudent` en lui passant les bons paramètres !
  - Si tout s'est bien passé, redirige l'utilisateur vers la page de détails de la promotion sélectionnée.
</details>