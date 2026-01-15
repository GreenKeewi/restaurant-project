import fs from 'fs/promises';
import path from 'path';
import translate from 'translate';

// Configure LibreTranslate (no API key required). You can change URL via LIBRE_URL.
translate.engine = 'libre';
translate.url = process.env.LIBRE_URL || 'https://libretranslate.com';

const root = path.resolve('/workspaces/restaurant-project');
const enPath = path.join(root, 'src', 'i18n', 'resources', 'en.json');
const frPath = path.join(root, 'src', 'i18n', 'resources', 'fr.json');

async function readJson(file) {
  const buf = await fs.readFile(file, 'utf8');
  return JSON.parse(buf);
}

async function writeJson(file, obj) {
  const json = JSON.stringify(obj, null, 2) + '\n';
  await fs.writeFile(file, json, 'utf8');
}

async function translateValue(value) {
  if (typeof value !== 'string') return value;
  try {
    const res = await translate(value, { to: 'fr' });
    return typeof res === 'string' ? res : value;
  } catch (err) {
    console.warn('[i18n-sync] Translation failed, keeping English:', value, err?.message || err);
    return value; // Fallback to English if translation fails
  }
}

async function translateObject(obj) {
  if (Array.isArray(obj)) {
    const out = [];
    for (const item of obj) out.push(await translateObject(item));
    return out;
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = await translateObject(v);
    }
    return out;
  }
  return translateValue(obj);
}

async function main() {
  const enJson = await readJson(enPath);
  const frJson = await translateObject(enJson);
  await writeJson(frPath, frJson);
  console.log('[i18n-sync] fr.json updated from en.json');
}

main().catch(err => {
  console.error('[i18n-sync] Error:', err);
  process.exit(1);
});
