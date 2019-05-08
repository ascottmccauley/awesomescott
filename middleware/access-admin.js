// Authorization restricted to admins only
// TODO: decide if we will be using custom claims or if we will use a table in db
import { auth } from '~/plugins/firebase.js'

export default function({ redirect }) {
  auth.currentUser
    .getIdTokenResult()
    .then(idTokenResult => {
      // confirm 'admin' custom claim
      if (!idTokenResult.claims.admin) {
        return redirect('/login')
      }
    })
    .catch(error => {
      console.log(error)
    })
}
