import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'data/translations');

const codes = ['es', 'en', 'fr', 'it', 'de', 'pt', 'ja', 'zh', 'ko', 'nl', 'hi', 'gu', 'ta', 'arn', 'gn', 'qu'];

const replacements = {
    'kids_birthday': {
        'hero.names': 'Lucas',
        'rsvp.hostName': 'Lucas',
        'calendar.title': 'Cumpleaños de Lucas',
        'gallery.hashtag': '#lucas5años'
    },
    'adult_birthday': {
        'hero.names': 'Valentina',
        'rsvp.hostName': 'Vale',
        'calendar.title': 'Mis 30 - Valentina',
        'gallery.hashtag': '#vale30'
    },
    'religious_ceremony': {
        'hero.names': 'Santiago',
        'rsvp.hostName': 'Santi',
        'calendar.title': 'Bautizo de Santiago',
        'gallery.hashtag': '#bautizosanti'
    },
    'live_concert': {
        'hero.names': 'The Rockers',
        'rsvp.hostName': 'The Rockers',
        'calendar.title': 'The Rockers Live',
        'gallery.hashtag': '#therockerslive'
    },
    'b2b_activation': {
        'hero.names': 'InnovaTech 2026',
        'rsvp.hostName': 'InnovaTech',
        'calendar.title': 'InnovaTech Summit',
        'gallery.hashtag': '#innovatech2026'
    },
    'book_launch': {
        'hero.names': 'El Despertar',
        'rsvp.hostName': 'Editorial M',
        'calendar.title': 'Lanzamiento: El Despertar',
        'gallery.hashtag': '#eldespertarlibro'
    },
    'gala': {
        'hero.names': 'Generación 26',
        'rsvp.hostName': 'Comité Gen26',
        'calendar.title': 'Gala de Graduación',
        'gallery.hashtag': '#gala2026'
    },
    'baby_shower': {
        'hero.names': 'Baby Emma',
        'rsvp.hostName': 'Marta y José',
        'calendar.title': 'Baby Shower de Emma',
        'gallery.hashtag': '#babyemma'
    },
    'corporate_dinner': {
        'hero.names': 'Cena Corporativa',
        'rsvp.hostName': 'RRHH',
        'calendar.title': 'Cena Fin de Año',
        'gallery.hashtag': '#cenacorporativa'
    }
};

for (const code of codes) {
    const filePath = path.join(dir, `${code}.ts`);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Clean up all templates
    for (const [templateId, mapping] of Object.entries(replacements)) {
        // It currently has "Sofi & Max" or translated equivalent, but we can't reliably regex the translated string.
        // So let's regex the key instead.
        // Example: 'kids_birthday.hero.names': 'Sofi & Max', -> 'kids_birthday.hero.names': 'Lucas',

        content = content.replace(
            new RegExp(`'${templateId}\\.hero\\.names':[^,]+,`, 'g'),
            `'${templateId}.hero.names': '${mapping['hero.names']}',`
        );
        content = content.replace(
            new RegExp(`'${templateId}\\.rsvp\\.hostName':[^,]+,`, 'g'),
            `'${templateId}.rsvp.hostName': '${mapping['rsvp.hostName']}',`
        );
        content = content.replace(
            new RegExp(`'${templateId}\\.calendar\\.title':[^,]+,`, 'g'),
            `'${templateId}.calendar.title': '${mapping['calendar.title']}',`
        );
        // We will inject the hashtag right after calendar.title
        // First we check if hashtag is already there. If not, add it.
        if (!content.includes(`'${templateId}.gallery.hashtag'`)) {
            content = content.replace(
                `'${templateId}.calendar.title': '${mapping['calendar.title']}',`,
                `'${templateId}.calendar.title': '${mapping['calendar.title']}',\n    '${templateId}.gallery.hashtag': '${mapping['gallery.hashtag']}',`
            );
        }
    }

    // also add classic_wedding hashtag
    if (!content.includes(`'classic_wedding.gallery.hashtag'`)) {
        content = content.replace(
            `'classic_wedding.calendar.title':`,
            `'classic_wedding.gallery.hashtag': '#sofiymax2026',\n    'classic_wedding.calendar.title':`
        );
    }

    fs.writeFileSync(filePath, content);
}

console.log('Successfully patched all templates with diverse names and hashtags.');
