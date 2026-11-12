// Firebase settings for the shared wishlist database.
//
// Leave this as `null` and the site still works: people text their wishlist
// link to the organizer instead.
//
// To turn on the database, follow "Setting up the wishlist database" in
// README.md, then replace `null` below with the settings Firebase gives you.
// They look like this:
//
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abc123"
// };
//
// These settings are safe to publish. They only say which database to use;
// the rules in firestore.rules decide what anyone can do with it.

window.FIREBASE_CONFIG = null;
