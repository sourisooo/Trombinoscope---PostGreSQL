# Trombinoclock

## Besoin

```
Bonjour,

Nous sommes une école qu'elle est bien, et nous voulons un outil pour faciliter les contacts entre étudiants.
Nous aimerions donc pouvoir lister les promotions ainsi que les étudiants qui les composent,
mais aussi accèder aux détails d'un étudiant, photo de profil comprise.
L'accès aux profils serait libre et gratuit.
Dans un second temps l'outil pourrait servir à éditer les profils et promotions.
En ésperant que vous pourrez répondre favorablement à notre demande,
Cordialement

Nicole
```

## Méthodologie de projet

SCRUM va nous permettre d'effectuer de la gestion de projet.

SCRUM va amener des pratiques et des rôles.

- product owner : responsable des choix autour du besoin
- scrum master : responsable des pratiques scrum

### Règles de base de SCRUM

- daily meeting : tous les jours, une réunion "rapide" (15min environ) l'équipe fait un point sur le projet
- sprint : période de temps pendant laquelle on va coder des fonctionnalités (user stories)
- user story : une fonctionnalité que nous allons décrire par : "en tant que ... je veux pouvoir ... afin de ..."
- démo : démonstration des fonctionnalités réalisées pendant un sprint au product owner

### Sprint

Un sprint est une période de temps. Elle est déterminée en amont du projet, généralement elle se situe entre 1 semaine et 1 mois.

Un sprint va contenir des user stories à développer.

### User story

Une user Story est une fonctionnalité.

Par exemple :

"je veux en tant que visiteur pouvoir afficher la liste des promos afin de pouvoir accéder à une promo en particulier"

Les user stories sont créés par le product owner avec l'appui du scrum master.

Toutes les user stories vont être référencées dans un fichier nommé "product backlog".

### Planning poker

Cette étape va permettre de déterminer le poids des user stories. Quelles sont les plus grosses ?

Le scrum master va passer en revue chaque user story et chaque dev va associer une carte (un poids) à celle-ci.

Si tout le monde est d'accord : on donne le poids à la user story
S'il y a des grosses différences : on en discute pour se mettre d'accord

Ceci va permettre de déterminer si on ne doit pas découper une user story, si elle est trop grosse, il faut en créer plusieurs à partir de celle-ci.

Une fois l'intégralité des poids des user stories déterminés, nous allons pouvoir organiser le sprint 0.

## Sprint 0

Initialisation du projet, mise en place de la structure de base pour commencer à coder les fonctionnalités (user story).

Dans notre contexte cela représente la mise en place d'une architecture avec Express/NodeJS.

## Sprint 1

Le sprint 1 arrive après le sprint 0.

On va venir sélectionner des user stories à réaliser pendant celui-ci.

Par exemple :

- on a décidé qu'un sprint fait deux semaines
- on va associer à un sprint un poids total à ne pas dépasser (le total des poids des user stories du sprint ne doit pas le dépasser)
- le product owner va décider des user stories à intégrer au sprint

## Documentation

Il y a deux types de documentation :

- partagée entre équipes : documentation qui va parler à tout le monde (qu'on soit dev ou pas)
- partagée au sein d'une équipe : documentation technique propre à son métier (par exemple documentation pour les dev)

Le cahier des charges est un document qui va permettre à l'ensemble des équipes de se mettre d'accord sur ce qui est attendu.

Les spécifications fonctionelles viennent détailler par exemple les exigences techniques d'une fonctionnalité :

- je veux mettre en place un système de login/mot de passe sur mon site => on va préciser dans les "specs" l'utilisation des sessions (épisode 5 de la saison)