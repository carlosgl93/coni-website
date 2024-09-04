import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin
initializeApp({
  credential: applicationDefault(),
});

// Initialize Firestore, Auth, and Storage services
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
