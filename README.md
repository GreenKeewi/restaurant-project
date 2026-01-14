Text Content Management

- Location: edit all app text in [src/i18n/resources/en.json](src/i18n/resources/en.json).
- Languages: French strings live in [src/i18n/resources/fr.json](src/i18n/resources/fr.json).
- Structure: keys are grouped by component (e.g., `NavigationMenu`, `ReservationForm`). Each key maps to the displayed string.
- Fallback: the app falls back to English when a translation is missing.

How to Change Text

- Open the JSON file and modify values only (avoid changing keys unless you also update component declarations).
- Example:

```
"NavigationMenu": {
	"home": "Home",
	"menu": "Menu",
	"about": "About"
}
```

Build & Preview

- Install dependencies and run the app:

```bash
npm install
npm run dev
```

Notes

- JSON files are loaded directly by i18n, so updating them reflects in the UI without code changes.
- If you add new keys, declare them in the corresponding component with `declareComponentKeys` so i18n knows about them.
