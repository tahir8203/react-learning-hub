# 🔥 Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** or **"Add project"**
3. Enter your project name: `React-Learning-Hub` (or any name)
4. Enable/disable Google Analytics (optional)
5. Click **"Create project"**
6. Wait for the project to be created

---

## Step 2: Register Your App in Firebase

1. In the Firebase Console, click on your project
2. Click the **Web icon** (</>) to add a web app
3. Enter your app name: `React Learning Hub`
4. Check **"Also set up Firebase Hosting for this app"** (optional)
5. Click **"Register app"**

---

## Step 3: Get Your Firebase Configuration

After registering, you'll see a code snippet like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxxxxxxxxxxxxxxx",
  authDomain: "react-learning-hub.firebaseapp.com",
  projectId: "react-learning-hub",
  storageBucket: "react-learning-hub.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg123456",
  measurementId: "G-XXXXXXXXXX"
};
```

**Copy these values!**

---

## Step 4: Add Values to `.env.local`

1. Open `.env.local` in your project root
2. Replace the empty values with your Firebase config:

```
VITE_FIREBASE_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=react-learning-hub.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=react-learning-hub
VITE_FIREBASE_STORAGE_BUCKET=react-learning-hub.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdefg123456
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Save the file

---

## Step 5: Enable Firestore Database

1. In Firebase Console, go to **"Firestore Database"** (left sidebar)
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Click **"Create"**
5. Choose a location (e.g., `us-central1`) and click **"Enable"**

---

## Step 6: Set Firestore Security Rules

For development/testing, use these rules (NOT for production):

1. In Firestore, go to the **"Rules"** tab
2. Replace with this code:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read/write for testing
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click **"Publish"**

**⚠️ Note:** For production, use proper authentication rules!

---

## Step 7: Test Locally

Run the dev server:

```bash
npm run dev
```

Visit `http://localhost:5173/` and the app should work without errors.

---

## Features You Can Now Use

Once Firebase is set up, you can add:

- **User Authentication** (email, Google, GitHub login)
- **Save User Progress** (track which topics they've completed)
- **Bookmarks** (users save favorite lessons)
- **User Profiles** (name, email, preferences)
- **Analytics** (track which topics are most popular)

See `src/services/firestoreService.js` for the pre-built functions!

---

## Next Step

Proceed to the **Netlify Deployment Guide**
