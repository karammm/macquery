import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCL7soJDUayY7kKEY-pQclqnyc3l2QZ8sc",
  authDomain: "macquery-44552.firebaseapp.com",
  projectId: "macquery-44552",
  storageBucket: "macquery-44552.firebasestorage.app",
  messagingSenderId: "447792314674",
  appId: "1:447792314674:web:32bc4ade48082ab8b7bf2b",
  measurementId: "G-QZNQJW3Z3J"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
