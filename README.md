# Test technique Paris Attitude - Karen Azoulay

## Problèmes identifiés et résolution

### Accès à la page de recherche

- Problème : L'utilisateur ne peut pas accéder à la page de recherche sans saisir un quartier.

- Attendu : Permettre l'accès à la page de recherche sans quartier.

- Résolution :
J'ai ajouté la page de recherche dans le router sans paramètre défini dans l'URL et configuré les redirections appropriées depuis la page d'accueil vers la page correspondante.
De plus, pour améliorer l'accessibilité de cette page, j'ai ajouté un bouton de redirection vers celle-ci dans le header.

### Affichage des biens dans la recherche

- Problème : Aucun bien n'est visible si aucun quartier n'est sélectionné.

- Attendu : Lorsque aucun quartier n'est sélectionné, afficher l'ensemble des biens.

- Résolution : J'ai configuré le résultat des filtres de la recherche par défaut en renvoyant tous les hébergements. Je mets à jour ces résultats seulement si les filtres sont bien définis.

### Connexion avec mot de passe

- Problème : Impossible de se connecter avec un mot de passe correct.

- Attendu : Corriger la logique d'authentification pour valider les identifiants corrects.

- Résolution : Dans le store d'authentification, je vérifie bien que le nom et le mot de passe sont égales à ce qui est défini dans ma configuration.

### Connexion persistante

- Problème : Après connexion, l'utilisateur est déconnecté en actualisant la page.

- Attendu : Assurer une persistance de la connexion après actualisation.

- Résolution : Dans le store d'authentification, j'enregistre / supprime le profil utilisateur dans le local storage

### Accès à la page "Favorites" sans connexion

- Problème : L'utilisateur peut accéder à la page des favoris via l'URL sans être connecté.

- Attendu : Bloquer l'accès à cette page si l'utilisateur n'est pas connecté.

### Modal de connexion sur la page "Favorites"

- Problème : Même connecté, cliquer sur "Favoris" affiche la modal de connexion.

- Attendu : Supprimer l'ouverture de la modal si l'utilisateur est déjà connecté.

- Résolution : J'ai changé la condition d'accès à la page des favoris, en affichant la modal seulement si l'utilisateur n'est pas connecté. 

### Filtres de loyer

- Problème : Les filtres de loyer ne fonctionnent pas correctement.

- Attendu : Corriger les filtres pour qu'ils filtrent les biens en fonction des critères de loyer sélectionnés.

### Enregistrement de recherche

- Problème : Rien ne se passe lorsqu'un utilisateur connecté clique sur "Enregistrer ma recherche".

- Attendu : Vérifier que la fonctionnalité est bien implémentée.

### Suppression de favoris

- Problème : La suppression d'un favori ne fonctionne pas.

- Attendu : Corriger la fonctionnalité de suppression des favoris.

### Suppression des recherches enregistrées

- Problème : Le bouton de suppression des recherches enregistrées est manquant.

- Attendu : Ajouter un bouton pour permettre cette suppression et s'assurer que la méthode backend existante soit appelée correctement et qu'elle fonctionne bien.

### Titre de l’onglet sur la page de recherche

- Problème : Le titre de l’onglet n’est pas présent sur la page de recherche.

- Attendu : Ajouter un titre pertinent au niveau de l’onglet pour améliorer l’expérience utilisateur.