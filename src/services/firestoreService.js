import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

/**
 * Firestore Service
 * Handles all database operations for user progress and bookmarks
 */

// Collection names
const USERS_COLLECTION = 'users';
const BOOKMARKS_COLLECTION = 'bookmarks';
const PROGRESS_COLLECTION = 'progress';

/**
 * Save a user's progress on a topic
 * @param {string} userId - User ID
 * @param {string} topicId - Topic ID (e.g., 'function-components')
 * @param {number} score - Score/completion percentage
 * @param {object} data - Additional progress data
 */
export const saveUserProgress = async (userId, topicId, score, data = {}) => {
  try {
    const progressRef = collection(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION);
    const existingQuery = query(progressRef, where('topicId', '==', topicId));
    const querySnapshot = await getDocs(existingQuery);

    if (querySnapshot.docs.length > 0) {
      // Update existing progress
      const docRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, querySnapshot.docs[0].id);
      await updateDoc(docRef, {
        score,
        ...data,
        lastUpdated: serverTimestamp(),
      });
      return querySnapshot.docs[0].id;
    } else {
      // Create new progress
      const docRef = await addDoc(progressRef, {
        topicId,
        score,
        ...data,
        createdAt: serverTimestamp(),
        lastUpdated: serverTimestamp(),
      });
      return docRef.id;
    }
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
};

/**
 * Get all user progress
 * @param {string} userId - User ID
 */
export const getUserProgress = async (userId) => {
  try {
    const progressRef = collection(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION);
    const querySnapshot = await getDocs(progressRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw error;
  }
};

/**
 * Add a bookmark to a topic
 * @param {string} userId - User ID
 * @param {string} topicId - Topic ID
 * @param {object} bookmarkData - Bookmark details
 */
export const addBookmark = async (userId, topicId, bookmarkData = {}) => {
  try {
    const bookmarkRef = collection(db, USERS_COLLECTION, userId, BOOKMARKS_COLLECTION);
    const docRef = await addDoc(bookmarkRef, {
      topicId,
      ...bookmarkData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding bookmark:', error);
    throw error;
  }
};

/**
 * Get all user bookmarks
 * @param {string} userId - User ID
 */
export const getUserBookmarks = async (userId) => {
  try {
    const bookmarkRef = collection(db, USERS_COLLECTION, userId, BOOKMARKS_COLLECTION);
    const querySnapshot = await getDocs(bookmarkRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    throw error;
  }
};

/**
 * Remove a bookmark
 * @param {string} userId - User ID
 * @param {string} bookmarkId - Bookmark ID
 */
export const removeBookmark = async (userId, bookmarkId) => {
  try {
    await deleteDoc(doc(db, USERS_COLLECTION, userId, BOOKMARKS_COLLECTION, bookmarkId));
  } catch (error) {
    console.error('Error removing bookmark:', error);
    throw error;
  }
};

/**
 * Save user profile data
 * @param {string} userId - User ID
 * @param {object} profileData - User profile information
 */
export const saveUserProfile = async (userId, profileData) => {
  try {
    await updateDoc(doc(db, USERS_COLLECTION, userId), {
      ...profileData,
      lastUpdated: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

/**
 * Get user profile
 * @param {string} userId - User ID
 */
export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, USERS_COLLECTION, userId);
    const docSnap = await getDocs(collection(db, USERS_COLLECTION));
    const userDoc = docSnap.docs.find(d => d.id === userId);
    
    if (userDoc) {
      return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
