import {firebase , auth} from "./firebase"

export default function signInWithGoogle () {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider)
}
