import { useAuthenticateStore } from 'stores/authenticate-store.js'

const routes = [
  {
    path: '/:lang?',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Home' },
        name: 'home',
      },
      // Ajout d'une route pour accéder à la page de recherche sans paramètre de recherche
      {
        path: 'search',
        component: () => import('pages/SearchPage.vue'),
        meta: { title: 'Search' },
        name: 'search',
      },
      {
        path: 'search/:search',
        component: () => import('pages/SearchPage.vue'),
        meta: { title: 'Search param' },
        name: 'search-param',
      },
      {
        path: 'favorites',
        component: () => import('pages/FavoritesPage.vue'),
        meta: { title: 'Favorites' },
        name: 'favorites',
        beforeEnter: (to, from, next) => {
          const { isAuthenticated, openAuthModal } = useAuthenticateStore()
          // Si l'utilisateur est connecté, j'accède à la page
          if (isAuthenticated) next()
          // Sinon, je redirige vers la page d'accueil et j'ouvre ma modal de connexion
          else {
            next({ name: 'home', params: { lang: to.params.lang } })
            openAuthModal()
          }
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { title: '404' },
    name: 'notFound',
  },
]

export default routes
