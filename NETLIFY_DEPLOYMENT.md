# 🚀 Netlify Deployment Guide

## Step 1: Prepare Your Code for Deployment

### 1.1 Push Code to GitHub

First, initialize git and push to GitHub:

```bash
cd c:\Users\LAPTOP POINT\task-tracker
git init
git add .
git commit -m "Initial commit: React Learning Hub with Firebase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/task-tracker.git
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### 1.2 Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"New"** (top left or in dropdown)
3. Repository name: `task-tracker`
4. Click **"Create repository"**
5. Follow the push instructions above

---

## Step 2: Create a Netlify Account

1. Go to [Netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Netlify to access GitHub
5. Complete signup

---

## Step 3: Connect GitHub to Netlify

### 3.1 Create New Site

1. In Netlify Dashboard, click **"Add new site"**
2. Choose **"Import an existing project"**
3. Select **GitHub** as your git provider
4. Search for `task-tracker` repository
5. Click to connect

### 3.2 Configure Build Settings

Netlify should auto-detect:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If not, set them manually:

```
Build command: npm run build
Publish directory: dist
```

Click **"Deploy site"**

---

## Step 4: Add Environment Variables to Netlify

1. Go to your Netlify site settings
2. Click **"Site settings"** → **"Build & deploy"** → **"Environment"**
3. Click **"Edit variables"**
4. Add these environment variables (from your Firebase config):

```
VITE_FIREBASE_API_KEY = AIzaSyDxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN = react-learning-hub.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = react-learning-hub
VITE_FIREBASE_STORAGE_BUCKET = react-learning-hub.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID = 123456789
VITE_FIREBASE_APP_ID = 1:123456789:web:abcdefg123456
VITE_FIREBASE_MEASUREMENT_ID = G-XXXXXXXXXX
```

5. Click **"Save"**

---

## Step 5: Deploy

### 5.1 Automatic Deployment (Recommended)

Once connected, every time you push to GitHub:

```bash
git add .
git commit -m "Update: Add new features"
git push origin main
```

Netlify will **automatically rebuild and deploy** your site! 🎉

### 5.2 Manual Deployment (Alternative)

If you want to deploy without GitHub:

1. Go to Netlify Site Settings
2. Click **"Deploy"**
3. Drag and drop the `dist` folder

---

## Step 6: Get Your Custom Domain (Optional)

### 6.1 Netlify Domain

1. In Netlify, go to **"Site settings"** → **"Domain management"**
2. Click **"Edit site name"**
3. Enter a custom name (e.g., `react-learning-hub`)
4. Your site will be: `react-learning-hub.netlify.app`

### 6.2 Custom Domain

To use your own domain (e.g., `mysite.com`):

1. Buy a domain from GoDaddy, Namecheap, etc.
2. In Netlify: **"Site settings"** → **"Domain management"**
3. Click **"Add custom domain"**
4. Enter your domain name
5. Follow Netlify's instructions to update DNS settings at your domain provider

---

## Step 7: Verify Deployment

1. Visit your Netlify URL: `https://react-learning-hub.netlify.app`
2. Click through the pages to verify everything works
3. Check browser console (F12) for any errors

---

## Step 8: Set Up Automatic Builds (CI/CD)

Your `netlify.toml` file already has configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This tells Netlify:
- **How to build:** Run `npm run build`
- **What to publish:** The `dist` folder
- **Routing:** Send all routes to `index.html` (for React Router)

---

## Step 9: Monitor Builds

1. In Netlify Dashboard, go to **"Deploys"**
2. Watch your builds in real-time
3. See build logs if anything fails
4. Rollback to previous version if needed

---

## Step 10: Update Firebase Security Rules (Important!)

Before going to production:

1. Go to Firebase Console → Firestore
2. Go to **"Rules"** tab
3. Replace test rules with secure rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      
      match /progress/{document=**} {
        allow read, write: if request.auth.uid == userId;
      }
      
      match /bookmarks/{document=**} {
        allow read, write: if request.auth.uid == userId;
      }
    }
  }
}
```

4. Click **"Publish"**

---

## Troubleshooting

### "Build failed" error

1. Check Netlify build logs
2. Make sure all environment variables are set
3. Verify `package.json` has correct scripts
4. Push code again: `git push origin main`

### "Cannot find module 'firebase'"

1. Ensure Firebase is installed locally:
   ```bash
   npm install firebase
   ```
2. Push changes:
   ```bash
   git add package*.json
   git commit -m "Update dependencies"
   git push origin main
   ```

### Firebase config not working

1. Double-check `.env.local` has correct values
2. Verify Netlify environment variables match exactly
3. Check that variable names start with `VITE_`
4. Redeploy after fixing

### Site shows blank page

1. Check browser console for errors (F12)
2. Check Netlify deploy logs
3. Verify `dist` folder exists after build
4. Test locally: `npm run build && npm run preview`

---

## Success! 🎉

Your React Learning Hub is now live on Netlify with Firebase backend!

**Share your site URL:** `https://react-learning-hub.netlify.app`

---

## Next Steps

1. **Add Authentication** - Users can sign up and log in
2. **Add User Features** - Save progress, bookmarks, preferences
3. **Custom Domain** - Use your own domain
4. **Google Analytics** - Track site usage
5. **Email Notifications** - Notify users of new content

See the `src/services/firestoreService.js` for pre-built functions!
