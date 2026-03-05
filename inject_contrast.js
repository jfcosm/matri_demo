import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.join(__dirname, 'components');

const replaceInFile = (filename, replacements) => {
    const filePath = path.join(componentsDir, filename);
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const { search, replace } of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content);
};

// 1. TechnicalProposal.tsx
replaceInFile('TechnicalProposal.tsx', [
    { search: 'text-white px-8', replace: 'text-[var(--color-primary-text)] px-8' },
    { search: 'bg-white/10 border-[var(--color-text)]', replace: 'bg-[var(--color-surface)] border-[var(--color-text)]' }
]);

// 2. GiftSection.tsx
replaceInFile('GiftSection.tsx', [
    { search: 'text-white px-10', replace: 'text-[var(--color-primary-text)] px-10' },
    { search: 'hover:text-white', replace: 'hover:text-[var(--color-primary-text)]' },
    { search: 'bg-white/10 border-[var(--color-text)]', replace: 'bg-[var(--color-surface)] border-[var(--color-text)]' }
]);

// 3. Countdown.tsx
replaceInFile('Countdown.tsx', [
    { search: 'hover:text-white', replace: 'hover:text-[var(--color-primary-text)]' }
]);

// 4. Details.tsx
replaceInFile('Details.tsx', [
    { search: 'group-hover:text-white', replace: 'group-hover:text-[var(--color-primary-text)]' },
    { search: 'hover:text-white', replace: 'hover:text-[var(--color-primary-text)]' }
]);

// 5. RSVPForm.tsx
replaceInFile('RSVPForm.tsx', [
    { search: 'text-white py-5', replace: 'text-[var(--color-primary-text)] py-5' },
    { search: 'bg-white/10', replace: 'bg-[var(--color-surface)]' }
]);

// 6. Footer.tsx
replaceInFile('Footer.tsx', [
    { search: 'bg-white/20 mx-auto', replace: 'bg-[var(--color-text)] opacity-10 mx-auto' }
]);

console.log('Successfully injected surface and primary-text CSS variables into component tree.');
