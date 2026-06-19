# Congratulations, Aarati! 🎓🌸

A small interactive graduation surprise page: a gift box that opens into
a confetti burst and reveals an animated bouquet with a message.

## Files

- `index.html` — page structure/content
- `style.css` — all styling and animations
- `script.js` — all interactivity (particles, gift-open, modal)

## Deploying on Vercel

1. Put these three files in their own folder (no subfolders needed).
2. Go to vercel.com → **Add New Project** → **Import** (or drag-and-drop
   the folder if using the "deploy via drag and drop" option on the
   Vercel dashboard).
3. Framework preset: choose **Other** (it's plain static HTML/CSS/JS —
   no build step needed).
4. Deploy. Vercel will give you a live URL you can send to Aarati.

Alternatively, with the Vercel CLI from inside this folder:
```
npm i -g vercel
vercel
```

## Easy text edits

- Her name / headline → `index.html`, inside `<div class="greeting">`.
- Your message to her → `index.html`, inside `<div class="message-box">`.
- Flower tag list → `index.html`, inside `<div class="flower-tags">`.

## Removing the photo placeholder

Open `index.html` and delete the whole block that starts with the
comment beginning `PHOTO PLACEHOLDER — fully optional, fully removable`
down through the line `<!-- =========== PHOTO PLACEHOLDER END =========== -->`.
Then open `style.css` and delete the block commented
`PHOTO PLACEHOLDER` (down to `END PHOTO PLACEHOLDER`).
Nothing else references those classes, so removal is safe.

To use a real photo instead of the dashed-box icon, replace the
contents of `<div class="photo-placeholder">` with:
```html
<img src="aarati.jpg" alt="Aarati" class="photo-img">
```
and add the photo file to the project folder.

## Removing the orbiting/flying flowers

- Orbiting flowers around the gift box: delete the `.orbit-ring` block
  in `index.html` and the matching CSS block in `style.css`
  (commented `ORBIT RING`).
- Flying flowers around the open bouquet: delete the `.fly-flower`
  spans inside `.bouquet-stage` in `index.html`, and the `.fly-flower`
  CSS block in `style.css`.
- Flying flowers drifting across the whole background: delete the
  "NEW: flying flowers" block in `script.js` and the `.flying-flower`
  CSS rule in `style.css`.
