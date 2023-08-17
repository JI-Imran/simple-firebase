/**
 * -------------------
 *    INITIAL Installation
 * -------------------
 * 1.visit console.firebase.google.com
 * 2. create project(skip google analytics)
 * 3. Register app (create config)
 * 4. Install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: do not publish or make not to push into github
 * -----------------------
 *     INTEGRATION
 * -----------------------
 * 7. Visit: Go to docs > Build > Authentication > web > Get Started
 * 8. export app from  the firebase.config.js file: export default app
 * 9. Login.jsx: import getauth from firebase/auth
 * 10. create cosnt auth = getAuth(app)
 * ------------------------
 *      PROVIDER SETUP
 * ------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method (google, facebook, github, etc.)
 * 14. [vite]: change 127.0.0.1 to localhost
 * -------------------------
 *      More Auth Prodiver
 * -------------------------
 * 1. Active the auth provider (create app, provide redirect url, client id, client secret)
 * 2. 
 * 
 * 8.18
 */