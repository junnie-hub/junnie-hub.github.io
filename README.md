# La Fourchette de Cana - Restaurant Camerounais

Site web pour le restaurant "La Fourchette de Cana" avec gestion de menu, réservations, commandes et panel administrateur.

## Fonctionnalités

- 🍽️ **Menu interactif** avec filtres par catégorie et prix
- 📅 **Système de réservation** en ligne
- 🛒 **Commande en ligne** avec suivi en temps réel
- 📱 **QR Codes** pour chaque table permettant d'accéder au menu
- 👨‍💼 **Panel administrateur** avec :
  - Gestion du menu (ajout, modification, disponibilité)
  - Gestion des réservations
  - Gestion des commandes
  - Notifications en temps réel
  - Génération de QR codes pour les tables
- 🔔 **Notifications** pour l'admin lors de nouvelles réservations/commandes
- 🌙 **Mode sombre/clair**

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation et développement local

1. **Cloner le projet** (si applicable) ou naviguer vers le dossier du projet

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** (optionnel - pour le chatbot) :
   - Créer un fichier `.env.local` à la racine du projet
   - Ajouter votre clé API Gemini :
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur** :
   - L'application sera accessible sur `http://localhost:3000`

 
## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt GitHub.

## Licence

Ce projet est privé et propriétaire de Novatechia
