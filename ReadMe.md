# CharleBin

## Description
CharleBin est un pastebin en ligne minimaliste et open-source où le serveur n'a aucune connaissance des données collées. Les données sont chiffrées/déchiffrées dans le navigateur en utilisant l'AES 256 bits. Ce projet sert de moyen privé et sécurisé pour partager du texte et des fichiers.

## Prérequis
- PHP
- JavaScript
- CSS

## Installation
Pour installer CharleBin localement, suivez ces étapes :

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/adrienMGN/CharleBin.git

   Accédez au répertoire du projet :
sh

    cd CharleBin

Développement

Pour commencer à développer sur CharleBin, assurez-vous d'avoir les dépendances nécessaires installées :
Tests Unitaires PHP

    Installez les packages suivants :
    sh

sudo apt install phpunit php-gd php-sqlite3 php-xdebug

Exécutez les tests :
sh

    cd tst
    phpunit

Tests Unitaires JavaScript

    Installez npm :
    sh

sudo apt install npm

Installez les packages globaux et locaux :
sh

npm install -g mocha nyc
cd js
npm install

Exécutez les tests :
sh

    cd js
    nyc mocha

Déploiement

Pour déployer CharleBin, suivez ces étapes :

    Construisez l'image Docker :
    sh

docker build -t charlebin .

Exécutez le conteneur Docker :
sh

    docker run --rm -p 8080:80 charlebin

Code

Vous pouvez ajouter ce contenu dans votre fichier `README.md` et le pousser sur la branche `main` de votre dépôt.
