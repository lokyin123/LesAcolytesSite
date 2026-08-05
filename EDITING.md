# Editing the Les Acolytes website

This is for whoever keeps the site up to date. You don't need to know anything technical, and you can't break the site by using this editor — everything is saved with a full history, so any change can be undone.

## Logging in

Go to **https://lesacolytesmusic.netlify.app/admin/** and click **Login**.

You'll have received an email invitation first — click the link in it, choose a password, and you'll be taken straight to the editor. If that link ever stops working, ask for a fresh invite.

## What you can change

The editor has three sections down the left-hand side.

### Site Settings

Everything that appears once on the site: the ensemble name and tagline, the big photo at the top, the About text and its photo, the list of members, contact details, and the Instagram, Facebook, Continuo Connect, and YouTube links.

The **Members** list has an **Add member** button, an **×** on each row to remove someone, and a handle (**=**) to drag people into a different order.

### Events

Your concert listings. Click **+ Event** to add one, or click an existing event to change it.

- **Date** — pick it from the calendar. You only enter it once; the site works out how to display it ("12 September 2026").
- **Festival / Concert Series** — optional. Enter the presenting festival or series when there is one; otherwise leave it blank.
- **Time** — enter the performance time in 24-hour format, such as `15:00` or `20:30`.
- **Past performance** — normally leave this off. Turn it on only when an event should appear under Past Performances before its stored date has passed.
- **Ticket / Info Link** — optional. Paste the full web address. If you leave it blank, no "Details" button appears.
- **Event Image** — optional. Shown beside the event.
- **Description** — optional. Programme notes, repertoire, whatever's worth saying.
- **Internal setting (leave alone)** — ignore this one, it just tells the site how to lay the page out.

**Past concerts are retained automatically.** Once an event's date has passed, it moves from Upcoming Performances into the Past Performances carousel the next time the site builds. You do not need to edit or delete it. Use **Past performance** only when an event needs to appear there before its stored date has passed; use **Delete entry** only when it should be removed from the site entirely.

The homepage highlight card uses the earliest upcoming event automatically. You do not need to enter it anywhere else. If there are no upcoming events, the card instead shows the most recent past performance alongside an invitation to explore Media.

To preview that no-upcoming-events fallback locally without changing any event, open **http://localhost:8080/?preview=fallback**. This preview switch works only on localhost and does not affect the deployed site.

### News

News articles appear newest-first on the News page, and every article gets its own page. Click **+ News article** to add one.

- **Publication Date** controls the order on the News page.
- **Summary** is the short introduction shown on the News page.
- **Featured Image** and **Image Description** are optional, but the description should briefly say what the image shows for visually impaired visitors.
- **Article** is the full story. You can add headings, links, and paragraphs with the editing toolbar.

### Media

- **Videos** — click **Add video**, then enter the composer and piece separately so the site can style them clearly. You also need the YouTube video's ID, which is the code in its web address after `watch?v=`. For `youtube.com/watch?v=KMH-7NeWgVA` the ID is `KMH-7NeWgVA`.
- **Photos** — click **Add photo**, then upload from your computer. The **Description** is read aloud to visually impaired visitors, so a short "the quartet performing in a stone chapel" is better than "photo 3".

Both lists let you remove items with the **×** and reorder them by dragging the **=** handle.

**A note on photo sizes:** photos straight off a phone are often very large. If you can, resize to around 2000 pixels wide before uploading — the site will load faster and stay tidy.

## Saving

Click **Publish → Publish now**. Your change goes live in about 30 seconds — refresh the site to see it.

If you want to come back to something later, use **Save** instead; it keeps your draft without putting it on the site.

---

# Setup notes (for James)

## One-time Netlify setup

In the Netlify dashboard for the site:

1. **Site configuration → Identity → Enable Identity**
2. **Identity → Registration** → set to **Invite only** (otherwise anyone could sign themselves up)
3. **Identity → Services → Enable Git Gateway**
4. **Identity → Invite users** → enter your brother's email address

He gets an email, sets a password, and is redirected into the editor. That redirect is handled by the Identity script in `src/_includes/base.njk` — without it the invite link lands on the homepage and appears to do nothing.

## Running the CMS locally

The admin panel works on your machine without Netlify, which is the easiest way to try changes out:

```
npm install
npm start      # terminal 1 — the site, on localhost:8080
npm run cms    # terminal 2 — the editor's backend, on localhost:8082
```

Then open **http://localhost:8080/admin/** and click Login — no password needed locally.

Edits made this way write **directly to the files in this folder**, so review them with `git diff` before committing. The port lives in `.env` (8082 rather than decap-server's default 8081, which Eleventy's dev server already occupies).

## Trying visual ideas locally

With the normal site preview running, open **http://localhost:8080/?tweaks**. A Visual tweaks panel appears over the site. Changes made there are temporary previews stored in that browser; they do not edit the website files or affect the live site.

- **Reset** returns the preview to the current real design.
- Give an experiment a name and choose **Save preset** to compare it again later in the same browser.
- **Copy settings** copies a summary that can be pasted into a conversation before deciding whether any part should be implemented.
- Choose **Hide** when the panel obstructs something, then **Open tweaks** to bring it back.
- **Panel colours** assigns the five editable colour tones independently to every main section and each musician biography panel.

The panel follows internal links while it is active, so the same experiment can be checked across the site's pages. It is excluded entirely from production builds.
