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

## Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

Pour prévisualiser la version de production :

```bash
npm run preview
```

## Déploiement

### Option 1 : Vercel (Recommandé)

1. Installer Vercel CLI :
   ```bash
   npm i -g vercel
   ```

2. Déployer :
   ```bash
   vercel
   ```

3. Suivre les instructions à l'écran

### Option 2 : Netlify

1. Installer Netlify CLI :
   ```bash
   npm i -g netlify-cli
   ```

2. Build et déployer :
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option 3 : GitHub Pages

1. Installer `gh-pages` :
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ajouter dans `package.json` :
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Déployer :
   ```bash
   npm run deploy
   ```

### Option 4 : Serveur traditionnel

1. Build le projet :
   ```bash
   npm run build
   ```

2. Copier le contenu du dossier `dist/` vers votre serveur web

3. Configurer votre serveur pour servir `index.html` pour toutes les routes (SPA)

## Configuration du panel admin

- **URL** : `/admin` (ou cliquer sur "Admin" dans le menu)
- **Mot de passe par défaut** : `admin123`
- ⚠️ **Important** : Changez le mot de passe dans `components/pages/AdminPage.tsx` avant le déploiement en production

## Structure du projet

```
la-fourchette-de-cana/
├── components/          # Composants React
│   ├── common/         # Composants réutilisables
│   └── pages/          # Pages de l'application
├── contexts/           # Contextes React (état global)
├── data/              # Données mockées
├── hooks/             # Hooks personnalisés
├── image/             # Images du projet
├── services/          # Services (API, etc.)
├── types.ts           # Types TypeScript
├── App.tsx            # Composant principal
└── index.tsx          # Point d'entrée
```

## Technologies utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS
- **Recharts** - Graphiques pour le dashboard admin

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt GitHub.

## Licence

Ce projet est privé et propriétaire de Novatechia
