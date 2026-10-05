import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const firebaseConfig = {
  apiKey: "AIzaSyB4pblcdBZaNYcthPs58HohtZ8VEsKfvkA",
  authDomain: "crud-30b37.firebaseapp.com",
  projectId: "crud-30b37",
  storageBucket: "crud-30b37.firebasestorage.app",
  messagingSenderId: "322247337756",
  appId: "1:322247337756:web:0dd4b5bfd873f5780abcd9",
  measurementId: "G-X5HPGDGFQG"
};

const app = initializeApp(firebaseConfig);
 
const persistence =
  Platform.OS === 'web'
    ? browserLocalPersistence
    : getReactNativePersistence(AsyncStorage);
 
const auth = initializeAuth(app, { persistence });
const database = getDatabase(app);
 
export { auth, database };