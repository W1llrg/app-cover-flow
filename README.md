# app-cover-flow
Projet architecture logicielle de William et Nolan

## Guide rapide

Le code du serveur se trouve dans le répertoire `server/` et est entièrement géré par Nuxt au démarrage de l'application.
Le code du front est dispatché entre `pages/` et `components/`, Nuxt fait du routage automatiquement sur les fichiers qui se situent dans le répertoire page `pages/`.

La base de données est exceptionnellement disponible sur le repo pour les données de test
La sécurité est désactivée sur les routes du backend.

### Lancement de l'application

```bash
# penser à installer les dépendances au 1er lancement
npm i

# exécution du projet
node .output/server/index.mjs
```

