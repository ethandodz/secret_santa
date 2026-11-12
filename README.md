# 🎄 Family Secret Santa

A one-page website for drawing Secret Santa names. Nobody is matched with themselves or their spouse.

## How to use it

1. Open the site (see "Putting it online" below).
2. Add everyone's name.
3. Use the dropdown next to each name to pick their spouse. Couples are never matched with each other.
4. Optionally add a spending limit and the gift exchange date.
5. Click **Draw names**.
6. Copy each person's link and text it to them. When they open it and tap **Unwrap**, they see who they're buying for.

Each link shows only that person's match, and the match is scrambled inside the link, so the organizer can't see it by looking at the link. (It is scrambled, not truly encrypted, so it's meant to keep family honest, not to stop someone determined to peek.) Everything runs in the browser. There is no server and no account.

To redo the draw, click **Draw names** again and send out the new links. Old links will still show the old matches.

## Putting it online (free, with GitHub Pages)

1. On GitHub, go to this repo's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then pick the branch and the `/ (root)` folder, and click **Save**.
3. After a minute the site will be live at `https://<your-username>.github.io/secret_santa/`.
