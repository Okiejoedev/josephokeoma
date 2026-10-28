# okiejoedev.github.io

Joseph Okeoma's website.

- **Home (`index.html`)** is strictly for Nigerian business owners: services, business apps, automations, websites, free templates (with lead capture), ebooks, FAQ and WhatsApp booking.
- **Labs (`labs.html`)**: experiments like the 3D Classroom and Wristside.
- **Portfolio (`portfolio.html`)**: research, publications, experience and education.

Live at **https://okiejoedev.github.io**. Any change pushed to `main` goes live in about a minute.

## Edit it with Claude

Open a Claude chat that can reach GitHub and say, for example:

> Add my repo Okiejoedev/okiejoedev.github.io and change the FAQ answer about pricing to …

Claude edits the files and pushes them, and the site updates by itself.

## Add a new template

1. Put the template zip (and an optional preview image) in `templates/`.
2. Add an entry to `templates.json`:

```json
{
  "id": "fake-alert-checker",
  "title": "Fake-alert payment checker",
  "tag": "Free · n8n template",
  "description": "One or two sentences on what it does.",
  "includes": ["What's inside", "Another thing inside"],
  "image": "templates/fake-alert-preview.png",
  "imageAlt": "Describe the image for screen readers",
  "file": "templates/fake-alert-checker.zip"
}
```

3. Remove it from `comingNext` if it was listed there.

It appears as a new card, and in the form's dropdown, automatically.

## Add a new project

Add an entry to `projects.json` under `projects`, with a `category` of:

- `business-apps`, `automations` or `websites`: shown on the home page
- `labs`: shown on the Labs page
- `research`: shown on the Portfolio page


```json
{ "category": "labs", "title": "Project name", "description": "One or two sentences.",
  "image": "assets/project.webp", "tags": ["Tool", "Topic"],
  "links": [{ "label": "Open the demo", "url": "https://..." }] }
```

It appears on the right page automatically. Leave `links` empty and add `"note": "Live demo coming soon"` if there's nothing to open yet.

## Add an ebook

In `ebooks.json`, add to `ebooks` (and remove its title from `comingSoon`):

```json
{ "title": "Ebook title", "description": "One sentence.", "price": "₦5,000",
  "cover": "assets/ebook-cover.jpg", "buyUrl": "https://selar.com/your-link" }
```

`buyUrl` is your payment link (Selar, Paystack or similar).

## Settings (top of the script in `index.html`)

- `PHONE`: WhatsApp number for every booking button
- `SHEET_URL`: Google Apps Script web app that saves form entries to the leads sheet

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page |
| `labs.html` | The Labs page |
| `portfolio.html` | The Portfolio page |
| `projects.json` | Every project, by category |
| `projects.js` | Shows projects on whichever page asks for them |
| `ebooks.json` | Ebooks for sale and coming soon |
| `style.css` | Shared styles for both pages |
| `templates.json` | The list of free templates |
| `templates/` | Template downloads and preview images |
| `assets/` | Photos and demo screenshots (`joseph.jpg` is the profile photo) |
| `og-image.png` | The image shown when the link is shared |

## Custom domain (josephokeoma.com)

When the domain is bought: add a `CNAME` file containing `josephokeoma.com`, point the domain's DNS to GitHub Pages, and turn on **Enforce HTTPS** in the repo's Pages settings.
