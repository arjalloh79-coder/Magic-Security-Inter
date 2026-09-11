# MAGIC SECURITY INTER — Site web officiel

Une société qui s'engage pour vous pour la sécurité des personnes, des biens et services.

Site vitrine premium, bilingue (français en langue principale, anglais disponible), orienté conversion,
pour la société de sécurité privée **MAGIC SECURITY INTER (MSI)** à Conakry, Guinée.

## Stack technique

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build & dev server)
- [Tailwind CSS](https://tailwindcss.com/) (design system utilitaire)
- [lucide-react](https://lucide.dev/) (icônes)
- i18n maison (contexte React, sans dépendance externe) — FR par défaut, bascule EN en un clic

## Démarrer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement (http://localhost:5173)
npm run dev

# 3. Construire la version de production (dossier dist/)
npm run build

# 4. Prévisualiser la build de production
npm run preview
```

## Structure du projet

```
src/
  components/        Sections et composants réutilisables (Navbar, Hero, ServicesSection, ...)
  data/company.ts     Coordonnées officielles de l'entreprise (adresse, téléphones, e-mail)
  i18n/                Système de traduction FR/EN (translations.ts + LanguageContext.tsx)
  hooks/useReveal.ts   Animation "scroll reveal" légère basée sur IntersectionObserver
public/
  images/              Emplacements des photos (voir public/images/README.md)
```

## Ajouter les vraies photos et le logo

Le logo affiché est une recréation SVG fidèle du badge MSI (anneau noir, aigle blanc/rouge, texte
"MAGIC-SECURITY-INTER · PROTECTION PRIVEE", étoiles) — elle s'affiche nette à toutes les tailles sans
fichier externe. Les photos d'agents/véhicule utilisent des emplacements réservés (`PhotoSlot`) tant
qu'aucun fichier n'est fourni.

Pour activer les vraies photos (et éventuellement remplacer le logo par le fichier officiel), déposez
les fichiers avec les noms exacts indiqués dans `public/images/README.md`. Aucune modification de code
n'est nécessaire — les composants basculent automatiquement sur l'image dès qu'elle existe à ce chemin.

## Contenu éditorial

- **Aucune certification, licence, partenariat, effectif ou année d'expérience n'a été inventé.**
  Seules les informations fournies (adresse, téléphones, e-mail, description "Une société qui s'engage
  pour vous pour la sécurité des personnes, des biens et services.") sont utilisées.
- Les textes sont centralisés dans `src/i18n/translations.ts` (clés `fr` et `en`) — modifiez-les
  directement là pour ajuster le discours commercial.
- Le formulaire "Demander un devis" prépare un e-mail (`mailto:`) pré-rempli vers
  `Magicsecurityinter224@laposte.net` avec les informations saisies ; branchez-le à un service d'envoi
  (Formspree, EmailJS, backend propre, etc.) si vous préférez un envoi silencieux sans ouvrir le client
  mail du visiteur.

## Déploiement

Le site est 100% statique après `npm run build` (dossier `dist/`). Il peut être hébergé sur Netlify,
Vercel, GitHub Pages, ou tout hébergeur statique / cPanel classique en copiant le contenu de `dist/`.
