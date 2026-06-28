# VerdiCrop Solutions — Site Vitrine

Site vitrine professionnel (en français) pour **VerdiCrop Solutions**, spécialiste des traitements agro-écologiques qui nettoient les arbres et protègent durablement les cultures.

> _Cultivez la pureté, récoltez la santé._

## Stack technique

- **React 18** + **Vite** — application rapide, HMR instantané
- **Tailwind CSS 3.4** — thème de marque personnalisé (vert forêt, vert feuille, or, crème)
- **Framer Motion** — animations au défilement, micro-interactions
- **Phosphor Icons** — icônes fines et élégantes
- **Fraunces** + **Plus Jakarta Sans** — typographie éditoriale premium (Google Fonts)

## Sections

1. **Accueil (Hero)** — accroche, double CTA, image de verger, badges de confiance
2. **Qui sommes-nous** — mission, valeurs, photos
3. **Produits / Traitements** — grille de cartes produits
4. **Comment ça marche** — procédé d'application en étapes
5. **Témoignages / Confiance** — avis d'agriculteurs + statistiques
6. **Contact** — formulaire validé + coordonnées
7. **Footer**

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrez l'URL locale affichée (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

## Logo

- Le **wordmark** de la barre de navigation et du footer est recréé en HTML/SVG (net à toutes les tailles) dans `src/components/Logo.jsx`.
- Pour afficher le **badge circulaire** original, déposez l'image dans `src/assets/logo.png` — un emplacement est déjà prévu dans le Hero. Sans ce fichier, un emblème stylisé de remplacement s'affiche automatiquement.

## Personnalisation

- **Couleurs / polices :** `tailwind.config.js`
- **Textes & contenus :** chaque composant dans `src/components/`
- **Images :** URLs Unsplash centralisées en haut des composants concernés (remplaçables par vos propres photos)
- **Coordonnées :** `src/components/Contact.jsx` et `src/components/Footer.jsx`

Le formulaire de contact fonctionne côté client (message de confirmation). Il peut être relié à un service e-mail (Formspree, EmailJS) ou à un backend ultérieurement.
