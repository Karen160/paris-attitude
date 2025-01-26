import { defineStore } from 'pinia'
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top',
  timeout: 4000,
})

export const useAuthenticateStore = defineStore('authenticate', {
  state: () => ({
    // Je récupère l'utilisateur s'il est défini dans le local storage
    user: JSON.parse(localStorage.getItem('user')) || null,
    authModal: false,
    // Je récupère les favoris de l'utilisateur s'ils sont défini dans le local storage
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  }),
  getters: {
    isAuthenticated() {
      return this.user !== null
    },
  },
  actions: {
    async authenticateUser(user) {
      // Je vérifie si le nom de l'utilisateur et le mot de passe sont correct
      if (user.username === process.env.USERNAME_APP && user.password === process.env.PASSWORD) {
        this.user = user
        // Je stocke le profil utilisateur dans le local storage
        localStorage.setItem('user', JSON.stringify(user))
        Notify.create({
          color: 'positive',
          message: 'You are now logged in!',
        })
        return user
      } else {
        Notify.create({
          color: 'negative',
          message: 'Invalid username or password!',
        })
        return null
      }
    },
    async logoutUser() {
      this.user = null
      // Je supprime le profil utilisateur dans le local storage
      localStorage.removeItem('user')
      Notify.create({
        color: 'positive',
        message: 'You are now logged out!',
      })
    },
    openAuthModal() {
      this.authModal = !this.authModal
    },
    addToFavorites(favorite) {
      // Check if the favorite already exists
      const existingFavorite = this.favorites.find((f) => f.id === favorite.id)
      if (existingFavorite) {
        Notify.create({
          color: 'negative',
          message: 'This favorite already exists!',
        })
        return false
      } else {
        this.favorites.push(favorite)
        // Je stocke les favoris de l'utilisateur dans le local storage
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
        Notify.create({
          color: 'positive',
          message: 'Favorite added!',
        })
      }
    },
    removeFromFavorites(favorite) {
      this.favorites = this.favorites.filter((f) => f.id !== favorite.id)
      // Je mets à jour les favoris dans le local storage
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
      Notify.create({
        color: 'positive',
        message: 'Favorite removed!',
      })
    },
  },
})
