# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Photo
Place your profile photo as `larisa.jpg` in the `src/assets/` folder.

### 3. Build the Website
```bash
npm run build
```

The website will be generated in the `_site/` folder.

## Preview Locally
```bash
npm run serve
```
Then open http://localhost:8080 in your browser.

## Edit Content

All content is in the `content/` folder:

- **`index.md`** - German homepage
- **`index_ru.md`** - Russian homepage
- **`impressum.md`** - Legal notice
- **`datenschutz.md`** - Privacy policy

Edit the text between HTML tags and run `npm run build` again.

## Deploy

Upload everything in the `_site/` folder to your web hosting provider.

## Features

- Bilingual website (German/Russian)
- Responsive design (mobile-friendly)
- Professional styling with Tailwind CSS
- Easy content management via Markdown
- SEO-friendly HTML
- Legal pages included (Impressum, Datenschutz)

## Need Help?

See `README.md` for detailed documentation.
