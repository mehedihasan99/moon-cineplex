import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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

    return userCredential
  } catch (error) {
    console.error(error)
    return error
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
    return userCredential
  } catch (error) {
    console.error(error)
    return error
  }
}
const signOutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {}
}
export { createUserWithEmail, signInWithEmail, signOutUser }
