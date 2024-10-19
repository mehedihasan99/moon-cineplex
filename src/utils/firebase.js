import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

//^ create account with email and password
const createUserWithEmail = async (
  fullName,
  email,
  password,
  confirmPassword
) => {
  // Check if passwords match
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' }
  }

  try {
    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    // Get the user object from the response
    const user = userCredential.user

    // Optionally update the profile to store the full name
    await updateProfile(user, {
      displayName: fullName,
    })

    return userCredential.user
  } catch (error) {
    throw new Error(error)
  }
}

// ^ sign in with email and password
const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    throw new Error(error)
  }
}
// ^ handle sign out
const userSignOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      throw new Error(error)
    })
}
// ^ forget password
const forgetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw new Error(error)
  }
}
// ^ google sign in
const googleSignIn = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error)
  }
}
export {
  auth,
  createUserWithEmail,
  forgetPassword,
  googleSignIn,
  signInWithEmail,
  userSignOut,
}
