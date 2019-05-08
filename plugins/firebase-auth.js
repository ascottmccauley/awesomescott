// TODO: only pull out necessary info from currentUser,
// we don't need the whole object,
// that's what is causing problems

import { auth } from '~/plugins/firebase.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const userClone = {
          id: user.id,
          email: user.email,
          emailVerified: user.emailVerified
        }
        store.dispatch('users/setUser', userClone)
      } else {
        store.dispatch('users/setUser', null)
      }
      resolve()
    })
  })
}
