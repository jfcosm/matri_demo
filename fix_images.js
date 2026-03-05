import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'data/templates.ts');

let content = fs.readFileSync(filePath, 'utf-8');

const regex = /heroImage:\s*{\s*url:\s*'https:\/\/images\.unsplash\.com[^']+',\s*placeholder:\s*'https:\/\/images\.unsplash\.com[^']+'\s*}/g;

const templateIds = [
    'kids_birthday', 'adult_birthday', 'religious_ceremony',
    'live_concert', 'b2b_activation', 'book_launch',
    'gala', 'baby_shower', 'corporate_dinner'
];

templateIds.forEach(id => {
    // We just replace any Unsplash link associated with each block
    // A simpler way: just replace all unsplash links with picsum seeds.
});

// Since classical wedding uses local 'matri_hero.jpg', we only replace the ones that start with https://images.unsplash.com as url
content = content.replace(/url:\s*'https:\/\/images\.unsplash\.com[^']+'/g, (match) => {
    // Generate a random seed based on a counter to keep them consistent
    const seed = Math.random().toString(36).substring(7);
    return `url: 'https://picsum.photos/seed/${seed}/1000/800'`;
});

content = content.replace(/placeholder:\s*'https:\/\/images\.unsplash\.com[^']+'/g, (match) => {
    const seed = Math.random().toString(36).substring(7);
    return `placeholder: 'https://picsum.photos/seed/${seed}/1000/800'`;
});

fs.writeFileSync(filePath, content);
console.log('Successfully replaced broken Unsplash links with Picsum seeds.');
