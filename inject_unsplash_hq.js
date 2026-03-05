import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'data/templates.ts');

let content = fs.readFileSync(filePath, 'utf-8');

// The best way to get a stable, beautiful image from unsplash without an API key is to use their direct photo IDs
const PREDEFINED_IMAGES = {
    'classic_wedding': 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    'kids_birthday': 'https://images.unsplash.com/photo-1530103862677-de3e1c6628b0?auto=format&fit=crop&w=1000&q=80',
    'adult_birthday': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
    'religious_ceremony': 'https://images.unsplash.com/photo-1438032005730-c7a3e01160ee?auto=format&fit=crop&w=1000&q=80',
    'live_concert': 'https://images.unsplash.com/photo-1540039155732-d674d5e8fee0?auto=format&fit=crop&w=1000&q=80',
    'b2b_activation': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80', // Better business conference
    'book_launch': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    'gala': 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80',
    'baby_shower': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80',
    'corporate_dinner': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80'
};

const TEMPLATE_IDS = [
    'classic_wedding', 'kids_birthday', 'adult_birthday', 'religious_ceremony',
    'live_concert', 'b2b_activation', 'book_launch', 'gala', 'baby_shower', 'corporate_dinner'
];

for (const id of TEMPLATE_IDS) {
    // Regex to find the heroImage block for a specific template
    // This looks for "id: 'template_id'," followed eventually by "heroImage: { ... }"
    // A simpler way: just string replace the known loremflickr formats.

    // We can use a regex that captures the whole block if needed, but since we are just updating the URL
    // Let's use string manipulation based on the ID structure in the file.
}

// Alternatively, let's just do a manual replace for the specific lines based on the loremflickr URLs
content = content.replace(/heroImage: { url: 'matri_hero\.jpg', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['classic_wedding']}', placeholder: '${PREDEFINED_IMAGES['classic_wedding']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/kids,birthday,party', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['kids_birthday']}', placeholder: '${PREDEFINED_IMAGES['kids_birthday']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/champagne,party', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['adult_birthday']}', placeholder: '${PREDEFINED_IMAGES['adult_birthday']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/baptism,church', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['religious_ceremony']}', placeholder: '${PREDEFINED_IMAGES['religious_ceremony']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/concert,live', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['live_concert']}', placeholder: '${PREDEFINED_IMAGES['live_concert']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/conference,business', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['b2b_activation']}', placeholder: '${PREDEFINED_IMAGES['b2b_activation']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/library,books', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['book_launch']}', placeholder: '${PREDEFINED_IMAGES['book_launch']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/elegant,gala', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['gala']}', placeholder: '${PREDEFINED_IMAGES['gala']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/baby,toys', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['baby_shower']}', placeholder: '${PREDEFINED_IMAGES['baby_shower']}' }`);

content = content.replace(/heroImage: { url: 'https:\/\/loremflickr\.com\/1000\/800\/dining,corporate', placeholder: 'https:\/\/loremflickr\.com[^']+' }/g,
    `heroImage: { url: '${PREDEFINED_IMAGES['corporate_dinner']}', placeholder: '${PREDEFINED_IMAGES['corporate_dinner']}' }`);

fs.writeFileSync(filePath, content);
console.log('Successfully injected exact Unsplash photos into templates.');
