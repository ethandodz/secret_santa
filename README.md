# 🎄 Family Secret Santa

A one-page website for drawing Secret Santa names. Everyone can add their own wishlist first, and nobody is matched with themselves or their spouse.

## How to use it

1. Open the site (see "Putting it online" below).
2. **Collect wishlists:** click **Copy wishlist form link** and paste it in the family group chat. Each person enters their name, gift ideas, things they like, and optionally specific items (a link to the item plus a note like "size medium"), then taps **Save my wishlist**. They show up in your list automatically, and anyone can reopen the link later to make changes. (If the database isn't set up yet, they text you a link instead. See below.)
3. Add anyone who's missing. You can also type in a wishlist for someone yourself.
4. Use the dropdown next to each name to pick their spouse. Couples are never matched with each other.
5. Optionally add a spending limit and the gift exchange date.
6. Click **Draw names**.
7. Copy each person's link and text it to them. When they open it and tap **Unwrap**, they see who they're buying for and that person's wishlist.

Wishlists are copied into the links when you draw, so collect them first. If a wishlist arrives or changes after you draw, the page tells you. Draw again and send out the new links.

Each link shows only that person's match, and the match is scrambled inside the link, so the organizer can't see it by looking at the link. (It is scrambled, not truly encrypted, so it's meant to keep family honest, not to stop someone determined to peek.) The draw happens in your browser and is never saved to the database.

**Your list is saved in your browser.** The names, couples and wishlists stay on the device where you set things up. To organize from a second phone or computer, use the **Copy your organizer link** button and open that link on the other device. Wishlists will load there automatically, but you'll need to set the couples again.

## Putting it online (free, with GitHub Pages)

1. On GitHub, go to this repo's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then pick the branch and the `/ (root)` folder, and click **Save**.
3. After a minute the site will be live at `https://<your-username>.github.io/secret_santa/`.

## Setting up the wishlist database (free, about 5 minutes)

The site uses Google's Firebase to collect wishlists in one place. The free plan is far more than a family needs, and you don't need a credit card. Your family doesn't need an account; only you do, to set it up.

Firebase moves its buttons around now and then, so the exact names below may differ slightly.

1. **Create a project.** Go to [console.firebase.google.com](https://console.firebase.google.com), sign in with a Google account, and click **Create a project** (or **Add project**). Name it something like `family-secret-santa`. You can turn off Google Analytics, since it isn't needed.
2. **Create the database.** In the left menu, open **Build → Firestore Database** and click **Create database**. Pick any location near you and choose **Start in production mode**.
3. **Paste in the rules.** In Firestore, open the **Rules** tab. Delete everything there, paste in the contents of [`firestore.rules`](firestore.rules) from this repo, and click **Publish**. These rules let people with your group's wishlist link add and edit wishlists, and block everything else.
4. **Get your settings.** Click the gear icon next to **Project Overview → Project settings**. Under **Your apps**, click the web icon (`</>`), give it any nickname, and click **Register app**. Leave Firebase Hosting unchecked. Firebase shows you a block of code with `const firebaseConfig = { ... }`. You only need the part in curly braces.
5. **Paste them into the site.** In this repo, open [`firebase-config.js`](firebase-config.js) and replace `null` on the last line with your settings, like this:

   ```js
   window.FIREBASE_CONFIG = {
     apiKey: "AIza...",
     authDomain: "family-secret-santa.firebaseapp.com",
     projectId: "family-secret-santa",
     storageBucket: "family-secret-santa.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123"
   };
   ```

   You can edit the file right on GitHub: open it, click the pencil icon, paste, and click **Commit changes**.
6. Open the site. Under "Collect wishlists" you should see **🟢 Live**. If you see a ⚠️ message instead, check that the rules were published in step 3.

These settings are safe to have in a public repo. They only say which database to use, and the rules decide what anyone can do with it.

**Without the database**, the site still works. When someone saves their wishlist, they get a link to text to you. Open it on the device where you're organizing (or paste it into the box under "Collect wishlists") and they're added to your list.
